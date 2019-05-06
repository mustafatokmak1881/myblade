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
	var x = e.changedTouches[0].clientX+farkX;
	var y = e.changedTouches[0].clientY+farkY;
	s.emit("kord", {x:x, y:y});

});
window.addEventListener("mousemove", function(e){
	var x = e.clientX+farkX;
	var y = e.clientY+farkY;
	c({x:x, y:y});
	s.emit("kord", {x:x, y:y});

});

window.addEventListener("resize", function(e){
	myc.width = window.innerWidth;
	myc.height = window.innerHeight;
});