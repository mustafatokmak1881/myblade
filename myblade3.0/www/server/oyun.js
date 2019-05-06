

const timer = 60;
const baslangic_hizi = 1;


const hersey = {
	oyuncular: {},
	zemin : []
}


const io = require("socket.io").listen(3011);
c("*:3011 portu dinlemede");

function c(d){
	console.log(d);
}
function cc(d){
	c("--------------------------------------------");
	c(d);
	c("--------------------------------------------");	
}
function ci(){
	cc("Online: "+io.engine.clientsCount);
}
function fps(){
	cc("FPS: "+ Math.floor(1000/timer));
}




function yeniZemin(x, y){
	var z = {x:x, y:y}
	hersey.zemin.push(z);
}

function yeniOyuncu(ad){
	var o = {ad: "", x:0, y:0, k:0, a:0, wx:0, wy:0, h:baslangic_hizi}
	o.ad = ad;
	o.x = Math.floor(Math.random() * 300);
	o.y = Math.floor(Math.random() * 300);
	return o;
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
function pf(d1){
	return parseFloat(d1);
}





yeniZemin(20, 20);
yeniZemin(30, 500);


io.on("connection", function(s){
	ci();


	s.on("ilkgiris", function(data){
		cc(data);
		hersey.oyuncular[s.id] = yeniOyuncu(data.ad);
	});

	s.on("tus", function(data){
		//c(data);

		
		if (hersey && hersey.oyuncular && hersey.oyuncular[s.id]){
			hersey.oyuncular[s.id].k = data.keyCode;
		}

		
	});

	s.on("kord", function(data){
		var x= Math.floor(data.x);
		var y = Math.floor(data.y);

		if (hersey && hersey.oyuncular && hersey.oyuncular[s.id] && hersey.oyuncular[s.id].x && hersey.oyuncular[s.id].y){
			var wxyCikti = wxybul(hersey.oyuncular[s.id].x, hersey.oyuncular[s.id].y, data.x, data.y);		
			var wx = wxyCikti.wx;
			var wy = wxyCikti.wy;


			
			hersey.oyuncular[s.id].wx = wx;
			hersey.oyuncular[s.id].wy = wy;

			
			c(hersey);

		}
		else{
			c("-");
		}



	});

	s.on("disconnect", function(){
		delete hersey.oyuncular[s.id];
	});

});




var donguzaman = setInterval(function(){

	if (hersey && hersey.oyuncular && Object.keys(hersey).length >0){
		for (var sid in hersey.oyuncular){


			hersey.oyuncular[sid].x = pf(hersey.oyuncular[sid].x) + pf(hersey.oyuncular[sid].wx)*pf(hersey.oyuncular[sid].h);
			hersey.oyuncular[sid].y = pf(hersey.oyuncular[sid].y) + pf(hersey.oyuncular[sid].wy)*pf(hersey.oyuncular[sid].h);

				if (hersey.oyuncular[sid].a>=6){
					hersey.oyuncular[sid].a = 0;
				}
				hersey.oyuncular[sid].a += 1;
		}
		
		io.emit("hersey", hersey);
		c(hersey);
		fps();
	}

}, timer);


