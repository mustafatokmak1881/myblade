

const timer = 30;
const baslangic_hizi = 1;
const baslangic_cani = 10;

const hersey = {
	oyuncular: {},
	nesne: []

}
var sabitZemin =  {ad: "zemin", x: 5, y:900, repeat: "repeat"}


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


function yeniSabit(x, y){
	var z = {x:x, y:y}
	hersey.sabitler.push(z);
}
function yeniNesne(x, y){
	var z = {x:x, y:y}
	hersey.nesne.push(z);
}

function yeniOyuncu(ad){
	var o = {ad: "", x:0, y:0, k:0, a:0, wx:0, wy:0, h:baslangic_hizi, c:baslangic_cani, r:""}
	o.ad = ad;
	o.x = Math.floor(Math.random() * 300);
	o.y = Math.floor(Math.random() * 300);
	return o;
}

function pf(d1){
	return parseFloat(d1);
}


//Yeni Zeminler
yeniNesne(20, 20);
yeniNesne(120, 120);
yeniNesne(220, 220);
yeniNesne(320, 320);




io.on("connection", function(s){
	ci();



	s.on("ilkgiris", function(data){
		hersey.oyuncular[s.id] = yeniOyuncu(data.ad);
	});

	s.on("tus", function(data){
			
		if (hersey && hersey.oyuncular && hersey.oyuncular[s.id]){ 
			hersey.oyuncular[s.id].k = data.keyCode;
		}

		
	});

	s.on("kord", function(data){

		if (hersey && hersey.oyuncular && hersey.oyuncular[s.id] && hersey.oyuncular[s.id].x && hersey.oyuncular[s.id].y){

			var wxytoplam = pf(data.wy+data.wy);

			if(wxytoplam <= 1){
				hersey.oyuncular[s.id].wx = data.wx;
				hersey.oyuncular[s.id].wy = data.wy;
				
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
			if(gelenk == 0){
				hersey.oyuncular[sid].h = baslangic_hizi;

			}else if(gelenk == 32){
				hersey.oyuncular[sid].h = baslangic_hizi*3;
			}
			


			hersey.oyuncular[sid].x = pf(hersey.oyuncular[sid].x) + pf(hersey.oyuncular[sid].wx)*pf(hersey.oyuncular[sid].h);
			hersey.oyuncular[sid].y = pf(hersey.oyuncular[sid].y) + pf(hersey.oyuncular[sid].wy)*pf(hersey.oyuncular[sid].h);

				if (hersey.oyuncular[sid].a>=600){
					hersey.oyuncular[sid].a = 0; 
				}

				if (hersey.oyuncular[sid].a < 20){
					hersey.oyuncular[sid].r = "k";
				}else if (hersey.oyuncular[sid].a >= 80 && hersey.oyuncular[sid].a < 120){
					hersey.oyuncular[sid].r = "b";
				}
				else{
					if (hersey.oyuncular[sid].k == 32){
						hersey.oyuncular[sid].r = "m";

					}
					else{
						hersey.oyuncular[sid].r = "s";
					}
				}

				hersey.oyuncular[sid].a += 1;
		}
		
		io.emit("hersey", hersey);
		c(hersey);
		fps();
	}

}, timer);


