

var myc = document.getElementById("myc");
var ctx = myc.getContext("2d");
myc.width = window.innerWidth;
myc.height = window.innerHeight;



var topac = new Image();
topac.src = "res/topac.png";


var zemin = new Image();
zemin.src = "res/zemin.png";

function zemin_Ciz(v){
	ctx.shadowColor = "black";
	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = 15;
	ctx.shadowBlur = 15;
	ctx.drawImage(zemin, 0, 0, zemin.width, zemin.height, v.x, v.y, zemin.width, zemin.height);
}


function topaci_ekranda_ortala(){
	var ortaX = (myc.width/2)-(topac.width/2);
	var ortaY = (myc.height/2)-(topac.height/2)
	return {ortaX: ortaX, ortaY: ortaY}
}

function topaci_Izle(x,y){
	var ortaX = topaci_ekranda_ortala().ortaX;
	var ortaY = topaci_ekranda_ortala().ortaY;

	var farkX = ortaX-x;
	var farkY = ortaY-y;

	var x = x+farkX;
	var y = y+farkY;
	return {x: x, y: y}

}

function topac_Ciz(sid,sidBilgi){



	ctx.font = "12px Arial";
	ctx.fillText(sidBilgi.ad, sidBilgi.x+40, sidBilgi.y);
	ctx.fillStyle ="black";




	var yaziRengi = "black";

	if (sid && sid == s.id){
		c("Benim bilgi");
		yaziRengi = "red";
	}
	else{
		c("Diğerleri");
		yaziRengi = "blue";

	}

	ctx.clearRect(0, 0, topac.width, topac.height);
	ctx.shadowColor = yaziRengi;
	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = 15;
	ctx.shadowBlur = 15;


c(sidBilgi);

	ctx.drawImage(topac, topac.width/7*sidBilgi.a, 0, topac.width/7, topac.height, sidBilgi.x, sidBilgi.y, topac.width/7, topac.height);
}



function render(data){

	if (data && data.oyuncular){
		ctx.clearRect(0,0, myc.width, myc.height);

		if(data.zemin && data.zemin.length>0){
			data.zemin.forEach(function(v,k){
				zemin_Ciz(v);
			});
		}

		for (sid in data.oyuncular){
			topac_Ciz(sid, data.oyuncular[sid]);
		}
	}
}







