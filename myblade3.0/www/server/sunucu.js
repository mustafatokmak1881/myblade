
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





var timer = 2000;

cc("FPS: "+ Math.floor(1000/timer));



var hepsi = {
	oyuncular: {},
	zemin : {}
}


function yeniOyuncu(ad){
	var o = {ad: "", x:"", y:""}
	o.ad = ad;
	o.x = Math.floor(Math.random() * 300);
	o.x = Math.floor(Math.random() * 300);
	return o;
}



io.on("connection", function(s){
	ci();


	s.on("ilkgiris", function(data){
		cc(data);
		hepsi.oyuncular[s.id] = yeniOyuncu(data.ad);
		cc(hepsi);
	});


	s.on("disconnect", function(){
		delete hepsi.oyuncular[s.id];
	});

});




var donguzaman = setInterval(function(){
	cc(hepsi);
	if (hepsi && Object.keys(hepsi).length >0){
		io.emit("hepsi", hepsi);		
	}

}, timer);