
const io = require("socket.io").listen(3007);
c("*:3007 portu dinlemede");

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





var timer = 300;

cc("FPS: "+ Math.floor(1000/timer));



var hersey = {
	oyuncular: {},
	zemin : {}
}


function yeniOyuncu(ad){
	var o = {ad: "", x:"", y:"", k:0}
	o.ad = ad;
	o.x = Math.floor(Math.random() * 300);
	o.y = Math.floor(Math.random() * 300);
	return o;
}



io.on("connection", function(s){
	ci();


	s.on("ilkgiris", function(data){
		cc(data);
		hersey.oyuncular[s.id] = yeniOyuncu(data.ad);
	});

	s.on("tus", function(data){
		c(data);
		if (hersey && hersey.oyuncular && hersey.oyuncular[s.id] && hersey.oyuncular[s.id].x){
			hersey.oyuncular[s.id].k = data.keyCode;
		}
	});

	s.on("disconnect", function(){
		delete hersey.oyuncular[s.id];
	});

});




var donguzaman = setInterval(function(){
	cc(hersey);
	if (hersey && hersey.oyuncular && Object.keys(hersey).length >0){
		for (var sid in hersey.oyuncular){
			var tus = hersey.oyuncular[sid].k;
			if (tus == 68){
				hersey.oyuncular[sid].x+=5;
			}
			else if (tus == 65){
				hersey.oyuncular[sid].x-=5;
			}
			else if(tus == 87){
				hersey.oyuncular[sid].y-=5;
			}
			else if(tus == 83){
				hersey.oyuncular[sid].y+=5;
			}			
		}
		io.emit("hersey", hersey);		
	}

}, timer);


