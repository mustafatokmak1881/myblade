

var myc = document.getElementById("myc");
var ctx = myc.getContext("2d");
myc.width = screen.width;
myc.height = screen.height;



var erkek = new Image();
erkek.src = "res/beyblade-sprite.png";




var kiz = new Image();
kiz.src = "res/kiz.png";



function ciz(v){

	ctx.clearRect(0, 0, erkek.width, erkek.height);
	ctx.shadowColor = "red";
	ctx.shadowBlur = 100;
	ctx.drawImage(erkek, erkek.width/8*v.a, 0, erkek.width/8, erkek.height, v.x, v.y, erkek.width/8, erkek.height);
}



function render(data){
	cc(data);

	if (data && data.oyuncular){
		ctx.clearRect(0,0, myc.width, myc.height);
		$.each(data.oyuncular, function(k,v){
			ciz(v);
		});
	}
}







