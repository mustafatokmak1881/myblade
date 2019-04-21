
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





var timer = 40;

cc("FPS: "+ Math.floor(1000/timer));



var hersey = {
	oyuncular: {},
	zemin : {}
}


function yeniOyuncu(ad){
	var o = {ad: "", x:"", y:""}
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
		cc(hersey);
	});

	s.on("tus", function(data){
		c(data);

		if (hersey && hersey.oyuncular && hersey.oyuncular[s.id] && hersey.oyuncular[s.id].x){
				if (data.keyCode == 68){
					hersey.oyuncular[s.id].x += 5;
				}
				else if (data.keyCode == 65){
					hersey.oyuncular[s.id].x -= 5;
				}
				else if (data.keyCode == 83){
					hersey.oyuncular[s.id].y += 5;
				}
				else if (data.keyCode == 87){
					hersey.oyuncular[s.id].y -= 5;
				}
		}
	});

	s.on("disconnect", function(){
		delete hersey.oyuncular[s.id];
	});

});




var donguzaman = setInterval(function(){
	cc(hersey);
	if (hersey && Object.keys(hersey).length >0){
		io.emit("hersey", hersey);		
	}

}, timer);


