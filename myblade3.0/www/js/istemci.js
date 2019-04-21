
var s = io.connect("http://localhost:3007");
$(document).ready(function(){

	$(".isimsor").fadeIn(2000);	

	s.on("hersey", function(data){
		render(data);
	});	

});


$(document).on("click", ".baslabtn", function(){


	s.emit("ilkgiris", {
		ad: $(".ad").val()
	});



});


window.addEventListener("keydown", function(e){
	s.emit("tus", {
		keyCode: e.keyCode
	});
});

