

var myc = document.getElementById("myc");
var ctx = myc.getContext("2d");
myc.width = window.innerWidth;
myc.height = window.innerHeight;

var mycsabit = document.getElementById("myc");
var sabitctx = mycsabit.getContext("2d");
mycsabit.width = window.innerWidth;
mycsabit.height = window.innerHeight;


var benimX = 0;
var benimY = 0;
var farkX = 0; //Benim X kordinatım ile ekranın tam ortasındaki X koordinatının farkı
var farkY = 0; //Benim Y kordinatım ile ekranın tam ortasındaki Y koordinatının farkı



var topac = new Image();
topac.src = "res/topac5.png";


var zemin = new Image();
zemin.src = "res/zemin.png";




function zemin_Ciz(v){
	ctx.shadowColor = "black";
	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = 15;
	ctx.shadowBlur = 25;

	ctx.drawImage(zemin, 0, 0, zemin.width, zemin.height, v.x+farkX, v.y+farkY, zemin.width, zemin.height);
}


function topaci_ekranda_ortala(){
	//var ortaX = Math.floor((myc.width/2)-(topac.width/2));
	//var ortaY = Math.floor((myc.height/2)-(topac.height/2));
	var ortaX = Math.floor((myc.width/2));
	var ortaY = Math.floor((myc.height/2));	
	return {ortaX: ortaX, ortaY: ortaY}
}
sdsa

function topac_Ciz(sid,sidBilgi){
	var x = 0;
	var y = 0;

	var ortaX = topaci_ekranda_ortala().ortaX;
	var ortaY = topaci_ekranda_ortala().ortaY;


	ctx.shadowOffsetX = 5;
	ctx.shadowOffsetY = 6;
	ctx.shadowBlur = 6;

	if (sid && sid == s.id){
		ctx.shadowColor = "black";
		ctx.font = "12px Arial";
		ctx.fillText(sidBilgi.ad, ortaX+40, ortaY);
		ctx.fillStyle = "red";

		benimX = sidBilgi.x;
		benimY = sidBilgi.y;
		farkX = ortaX-sidBilgi.x;
		farkY = ortaY-sidBilgi.y;
		x = ortaX;
		y = ortaY;
		

	}
	else{
		ctx.shadowColor = "black";
		ctx.font = "10px Arial";
		ctx.fillText(sidBilgi.ad, sidBilgi.x+farkX, sidBilgi.y+farkY);
		ctx.fillStyle = "green";
		x = sidBilgi.x+farkX;
		y = sidBilgi.y+farkY;
	}

	if (sidBilgi.k == 32){
		ctx.shadowColor= "red";
	}


	ctx.drawImage(topac, topac.width/7*sidBilgi.a, 0, topac.width/7, topac.height, x, y, topac.width/7, topac.height);	

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







