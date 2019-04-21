function c(d){
	console.log(d);
}
function cc(d){
	c("--------------------------------------------");
	c(d);
	c("--------------------------------------------");	
}


$(document).ready(function(){

	$(".isimsor").fadeIn(2000);


});


$(document).on("click", ".baslabtn", function(){


	var s = io.connect("http://localhost:3007");
	s.connect("ilkgiris", {
		ad: $(".ad").val()
	});

	s.on("hepsi", function(data){
		cc(data);
	});	
});

