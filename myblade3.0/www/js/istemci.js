var asagi_tusu = 1;
var yukari_tusu = 0;

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





window.addEventListener("keydown", function(e){
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
