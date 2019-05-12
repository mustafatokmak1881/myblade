

const timer = 30;
const baslangic_hizi = 10;


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

function pf(d1){
	return parseFloat(d1);
}


//Yeni Zeminler
yeniZemin(20, 20);
yeniZemin(30, 500);
yeniZemin(900, 300);



io.on("connection", function(s){
	ci();


	s.on("ilkgiris", function(data){
		cc(data);
		hersey.oyuncular[s.id] = yeniOyuncu(data.ad);
	});

	s.on("tus", function(data){
		c(data);
		
		if (hersey && hersey.oyuncular && hersey.oyuncular[s.id]){ 
			hersey.oyuncular[s.id].k = data.keyCode;
		}

		
	});

	s.on("kord", function(data){

		if (hersey && hersey.oyuncular && hersey.oyuncular[s.id] && hersey.oyuncular[s.id].x && hersey.oyuncular[s.id].y){

			var wxytoplam = pf(data.wy+data.wy);
			c(wxytoplam);

			if(wxytoplam <= 1){
				hersey.oyuncular[s.id].wx = data.wx;
				hersey.oyuncular[s.id].wy = data.wy;
				
			}else{
				c("Hile");
				c(wxytoplam);
				return false;
			}

		}
		else{

		}



	});

	s.on("disconnect", function(){
		delete hersey.oyuncular[s.id];
	});

});




var donguzaman = setInterval(function(){

	if (hersey && hersey.oyuncular && Object.keys(hersey).length >0){
		for (var sid in hersey.oyuncular){

			var gelenk = hersey.oyuncular[sid].k;

			c(typeof gelenk);
			c(gelenk);

			if(gelenk == 0){
				c("gelenk degeri=0");

				hersey.oyuncular[sid].h = baslangic_hizi;

			}else if(gelenk == 32){
				c("gelenk degeri==32");
				hersey.oyuncular[sid].h = baslangic_hizi*2;
			}
			


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


