var keydown = 0;
var keyup = 0;

var s = io.connect("http://localhost:3007");
//var s = io.connect("http://173.212.232.18:3007");

$(document).ready(function(){

	s.on("connect", function(){
		$(".isimsor").fadeIn(1500);
	});

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


	s.emit("tus", {
		keyCode: e.keyCode
	});

window.addEventListener("keydown", function(e){
	
	 
});
window.addEventListener("keyup", function(e){

});
