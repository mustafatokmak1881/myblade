

var myc = document.getElementById("myc");
var ctx = myc.getContext("2d");
myc.width = window.innerWidth;
myc.height = window.innerHeight;

var benimX = 0;
var benimY = 0;
var farkX = 0; //Benim X kordinatım ile ekranın tam ortasındaki X koordinatının farkı
var farkY = 0; //Benim Y kordinatım ile ekranın tam ortasındaki Y koordinatının farkı


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
	//var ortaX = Math.floor((myc.width/2)-(topac.width/2));
	//var ortaY = Math.floor((myc.height/2)-(topac.height/2));
	var ortaX = Math.floor((myc.width/2));
	var ortaY = Math.floor((myc.height/2));	
	return {ortaX: ortaX, ortaY: ortaY}
}



function topac_Ciz(sid,sidBilgi){



	ctx.font = "12px Arial";
	ctx.fillText(sidBilgi.ad, sidBilgi.x+40, sidBilgi.y);
	ctx.fillStyle ="black";




	var yaziRengi = "black";

	var ortaX = topaci_ekranda_ortala().ortaX;
	var ortaY = topaci_ekranda_ortala().ortaY;

	if (sid && sid == s.id){
		yaziRengi = "red";

		benimX =  sidBilgi.x;
		benimY =  sidBilgi.y;

		farkX = ortaX-benimX;
		farkY = ortaY-benimY;




		ctx.drawImage(topac, topac.width/7*sidBilgi.a, 0, topac.width/7, topac.height, ortaX, ortaY, topac.width/7, topac.height);		

	}
	else{
		yaziRengi = "blue";
		var x = sidBilgi.x+farkX;
		var y = sidBilgi.y+farkY;

		ctx.drawImage(topac, topac.width/7*sidBilgi.a, 0, topac.width/7, topac.height, x, y, topac.width/7, topac.height);	
	}

	ctx.clearRect(0, 0, topac.width, topac.height);
	ctx.shadowColor = yaziRengi;
	ctx.shadowOffsetX = 5;
	ctx.shadowOffsetY = 6;
	ctx.shadowBlur = 6;

	


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







