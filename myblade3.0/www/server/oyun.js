
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





var timer = 1000/60;

cc("FPS: "+ Math.floor(1000/timer));



var hersey = {
	oyuncular: {},
	zemin : {}
}


function yeniOyuncu(ad){
	var o = {ad: "", x:"", y:"", k:0, a:0}
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

		
		if (hersey && hersey.oyuncular && hersey.oyuncular[s.id]){
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
			if (tus == 100){
				hersey.oyuncular[sid].x+=5;
			}
			else if (tus == 97){
				hersey.oyuncular[sid].x-=5;
			}
			else if(tus == 119){
				hersey.oyuncular[sid].y-=5;
			}
			else if(tus == 115){
				hersey.oyuncular[sid].y+=5;
			}

			//if (tus != "" && tus != 0){
				if (hersey.oyuncular[sid].a>=7){
					hersey.oyuncular[sid].a = 0;
				}
				hersey.oyuncular[sid].a += 1;
			//}else{
				//hersey.oyuncular[sid].a = 0;
			//}
			

		}
		
		io.emit("hersey", hersey);	
	}

}, timer);


