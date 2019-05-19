



var myc = document.getElementById("myc");
var ctx = myc.getContext("2d");
myc.width = window.innerWidth;
myc.height = window.innerHeight;

var mycSabit = document.getElementById("mycSabit");
var ctxSabit = mycSabit.getContext("2d");
mycSabit.width = window.innerWidth;
mycSabit.height = window.innerHeight;


var benimX = 0;
var benimY = 0;
var benimC = 0;
var farkX = 0; //Benim X kordinatım ile ekranın tam ortasındaki X koordinatının farkı
var farkY = 0; //Benim Y kordinatım ile ekranın tam ortasındaki Y koordinatının farkı



var topac = new Image();
topac.src = "res/topac8.png";


var nesne = new Image();
nesne.src = "res/nesne.png";

var sabitZeminResim = new Image();
sabitZeminResim.src = "res/sabitzemin.png";



var sabitZeminResimX = 100;
var sabitZeminResimY = 100;

sabitZeminResim.onload = function(){

	//ctxSabit.drawImage(sabitZeminResim, sabitZeminResimX+farkX, sabitZeminResimY+farkY, sabitZeminResim.width, sabitZeminResim.height);
	ctxSabit.createPattern(sabitZeminResim , "repeat");
	ctxSabit.fillStyle = "";

}


function sabitZeminSurekli(data){
	c(data);
}

function nesne_Ciz(v){
	ctx.shadowColor = "black";
	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = 15;
	ctx.shadowBlur = 25;
	ctx.drawImage(nesne, 0, 0, nesne.width, nesne.height, v.x+farkX, v.y+farkY, nesne.width, nesne.height);
}


function topaci_ekranda_ortala(){
	//var ortaX = Math.floor((myc.width/2)-(topac.width/2));
	//var ortaY = Math.floor((myc.height/2)-(topac.height/2));
	var ortaX = Math.floor((myc.width/2));
	var ortaY = Math.floor((myc.height/2));	
	return {ortaX: ortaX, ortaY: ortaY}
}

function topac_Ciz(sid,sidBilgi){
	var x = 0;
	var y = 0;

	var ortaX = topaci_ekranda_ortala().ortaX;
	var ortaY = topaci_ekranda_ortala().ortaY;


	ctx.shadowOffsetX = 5;
	ctx.shadowOffsetY = 6;
	ctx.shadowBlur = 6;
	ctx.font = "12px Arial";
	if (sid && sid == s.id){
		ctx.shadowColor = "black";
		//ctx.font = "12px Arial";
		ctx.fillText(sidBilgi.ad, ortaX+40, ortaY-16);
		ctx.fillStyle = "red";

		benimX = sidBilgi.x;
		benimY = sidBilgi.y;
		benimC = sidBilgi.c;


		if (benimC >= 64){
			benimC = 64;
		}

		farkX = ortaX-sidBilgi.x;
		farkY = ortaY-sidBilgi.y;
		x = ortaX;
		y = ortaY;
		

	}
	else{
		ctx.shadowColor = "black";
		//ctx.font = "12px Arial";
		ctx.fillText(sidBilgi.ad, sidBilgi.x+farkX+40, sidBilgi.y+farkY-16);
		ctx.fillStyle = "green";
		x = sidBilgi.x+farkX;
		y = sidBilgi.y+farkY;
	}


	if (sidBilgi.r == "k"){	
		ctx.shadowColor="red";
		ctx.shadowBlur = 6;
	}
	else if(sidBilgi.r == "b"){
		ctx.shadowColor = "white";
		ctx.shadowBlur = 6;
	}
	else{

		if (sidBilgi.r == "m"){		
			ctx.shadowColor = "blue";
			ctx.shadowBlur = 35;
		}
		else{
				
			ctx.shadowColor = "black";
			ctx.shadowBlur = 6;		
		}		

	}

	//Güç göstergesi gerçek
	ctx.beginPath();
	ctx.rect(x, y-10, benimC, 10);
	ctx.fillStyle = "yellow";
	ctx.fill();

	//Güç Göstergesi Dış Çerçeve
	ctx.beginPath();
	ctx.rect(x,y-10, 64,10);
	ctx.stokeStyle="#ccc";
	ctx.stroke();

	ctx.drawImage(topac, topac.width/7*((sidBilgi.a)%7), 0, topac.width/7, topac.height, x, y, topac.width/7, topac.height);	

}



function render(data){
	//c(data);

sabitZeminSurekli();
	if (data && data.oyuncular){
		ctx.clearRect(0,0, myc.width, myc.height);

		if(data.nesne && data.nesne.length>0){
			data.nesne.forEach(function(v,k){
				nesne_Ciz(v);
			});
		}

		for (sid in data.oyuncular){
			topac_Ciz(sid, data.oyuncular[sid]);
		}
	}
}







