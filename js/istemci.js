var asagi_tusu = 1;
var suan = new Date().getTime();
var doubletouch = 0;
var doubletouchZaman = 0;

var s = io();

function kaliciNesneEkle(t,x,y){
	var o = {t:t, x:x, y:y}
	kaliciNesneler.push(o);
}

$(document).ready(function(){
	$(".isimsor").fadeIn(1500);

	s.on("hersey", function(data){
		render(data);
	});	

	s.on("ilkgiris", function(data){
		kaliciNesneler = data.kaliciNesneler;
		render(kaliciNesneler);
	});

	s.on("kaliciNesneSil", function(data){
		kaliciNesneler.splice(data.k, 1);
	});

	s.on("kaliciNesneEkle", function(data){
		kaliciNesneEkle(data.t,data.x,data.y);
	});

	s.on("oyunbitti", function(data){
		$(".isimsor").fadeIn(2500);
	});

	s.on("tusabas", function(data){
		//alert(data.tus);
	});
});

$(document).on("click", ".baslabtn", function(){
	s.emit("ilkgiris", {
		ad: $(".ad").val()
	});
	$(".isimsor").hide();
});

function pf(d){
	return parseFloat(d);
}

function wxybul(newx, newy, x, y)
{
	var fx = x-newx;
	var fy = y-newy;
	var wtoplam = Math.abs(fx)+Math.abs(fy);
	var wx = (fx/wtoplam)%wtoplam;
	var wy = (fy/wtoplam)%wtoplam;	
	var obj = {wx: wx.toFixed(2), wy: wy.toFixed(2)}
	return obj;			
}

window.addEventListener("keypress", function(e){
	if (asagi_tusu == 1){
		s.emit("tus", {
			keyCode: e.keyCode
		});
	}	
	asagi_tusu = 0;		
});
window.addEventListener("keyup", function(e){
	s.emit("tus", {
		keyCode: 0
	});
	asagi_tusu = 1;		
});

window.addEventListener("mousedown", function(e){
	if (asagi_tusu == 1 && e.which == 1){
		s.emit("tus", {
			keyCode: 113
		});
	}	
	asagi_tusu = 0;	
});

window.addEventListener("mouseup", function(e){
	s.emit("tus", {
		keyCode: 0
	});
	asagi_tusu = 1;		
});

// Mobil touch end event'i
window.addEventListener("touchend", function(e){
	// Input alanlarına dokunulduğunda preventDefault yapma
	if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON' || e.target.closest('.isimsor')) {
		return;
	}
	
	e.preventDefault();
	s.emit("tus", {
		keyCode: 0
	});
	asagi_tusu = 1;
	doubletouch = 0;
}, { passive: false });
window.addEventListener("touchstart", function(e){
	// Input alanlarına dokunulduğunda preventDefault yapma
	if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON' || e.target.closest('.isimsor')) {
		return;
	}
	
	e.preventDefault(); // Mobil tarayıcıda zoom'u engelle
	
	if (doubletouch == 0){
		let suan = new Date().getTime();
		doubletouchZaman = suan;
	}
	doubletouch++;

	let suan = new Date().getTime();
	let fark = suan-doubletouchZaman;
	if (fark <= 300){ // Mobilde daha uzun süre
		if (asagi_tusu == 1){
			s.emit("tus", {
				keyCode: 113
			});
		}	
		asagi_tusu = 0;	
	}else{
		let suan = new Date().getTime();
		doubletouchZaman = suan;
	}
}, { passive: false });

window.addEventListener("touchmove",function(e){
	// Input alanlarına dokunulduğunda preventDefault yapma
	if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON' || e.target.closest('.isimsor')) {
		return;
	}
	
	e.preventDefault(); // Mobil tarayıcıda scroll'u engelle
	
	var x = parseInt(e.changedTouches[0].clientX);
	var y = parseInt(e.changedTouches[0].clientY);

	var ortala = topaci_ekranda_ortala();
	var ortaX = pf(ortala.ortaX+(ortala.width/2));
	var ortaY = pf(ortala.ortaY+(ortala.height/2));

	var wxyCikti = wxybul(ortaX, ortaY, x, y);	
	s.emit("kord", {wx:wxyCikti.wx, wy:wxyCikti.wy});
}, { passive: false });

window.addEventListener("mousemove", function(e){
	var x = parseInt(e.clientX);
	var y = parseInt(e.clientY);

	var ortala = topaci_ekranda_ortala();
	var ortaX = pf(ortala.ortaX+(ortala.width/2));
	var ortaY = pf(ortala.ortaY+(ortala.height/2));

	var wxyCikti = wxybul(ortaX, ortaY, x, y);	
	wx = wxyCikti.wx;
	wy = wxyCikti.wy;

	s.emit("kord", {wx:wxyCikti.wx, wy:wxyCikti.wy});
});

window.addEventListener("resize", function(e){
	resizeCanvases();
});