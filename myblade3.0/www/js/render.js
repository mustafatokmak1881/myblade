var myc = document.getElementById("myc");
var ctx = myc.getContext("2d");
myc.width = screen.width;
myc.height = screen.height;
cc(myc.width);
cc(myc.height);


var karakter = new Image();
karakter.src = "res/karakter.png";


function ciz(v){
	cc(v);

	ctx.drawImage(karakter, v.x, v.y, karakter.width, karakter.height);
}

function render(data){
	//cc(data);

	if (data && data.oyuncular){
		ctx.clearRect(0,0, myc.width, myc.height);
		$.each(data.oyuncular, function(k,v){
			ciz(v);
		});
	}
}