var asagi_tusu = 1;





var s = io.connect("http://localhost:3011");
//var s = io.connect("http://173.212.232.18:3011");

$(document).ready(function(){

	$(".isimsor").fadeIn(1500);


	s.on("hersey", function(data){
		render(data);
	});	

});


$(document).on("click", ".baslabtn", function(){
	s.emit("ilkgiris", {
		ad: $(".ad").val()
	});
	$(".isimsor").hide();
});


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

window.addEventListener("touchmove",function(e){
	var x = parseInt(e.changedTouches[0].clientX+farkX);
	var y = parseInt(e.changedTouches[0].clientY+farkY);
	s.emit("kord", {x:x, y:y});

});
window.addEventListener("mousemove", function(e){


	var x = parseInt(e.clientX);
	var y = parseInt(e.clientY);

	var ortaX = topaci_ekranda_ortala().ortaX;
	var ortaY = topaci_ekranda_ortala().ortaY;

	var wxyCikti = wxybul(ortaX, ortaY, x, y);	
	c(wxyCikti);

	s.emit("kord", {wx:wxyCikti.wx, wy:wxyCikti.wy});

});

window.addEventListener("resize", function(e){
	myc.width = window.innerWidth;
	myc.height = window.innerHeight;

});