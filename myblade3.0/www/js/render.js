



var myc = document.getElementById("myc");
var ctx = myc.getContext("2d");
myc.width = window.innerWidth;
myc.height = window.innerHeight;

var mycSabit = document.getElementById("mycSabit");
var ctxSabit = mycSabit.getContext("2d");
mycSabit.width = window.innerWidth;
mycSabit.height = window.innerHeight;





var topac = new Image();
topac.src = "res/topac8.png";


var zeminRes = new Image();
zeminRes.src = "res/zemin.png";
var gucRes = new Image();
gucRes.src = "res/guc.png";
var hizRes = new Image();
hizRes.src = "res/karakter.png";




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


function kaliciNesneCiz(kaliciNesneler){


	// ÖNCE ZEMİN
	for (n in kaliciNesneler){


		var x = kaliciNesneler[n].x;
		var y = kaliciNesneler[n].y;
		var t = kaliciNesneler[n].t;

		if (t == "z"){
			ctxSabit.drawImage(zeminRes, 0,0, zeminRes.width, zeminRes.height, x+farkX, y+farkY, zeminRes.width, zeminRes.height);
		}
		
	}

	// SONRA DİĞER SABİTLER
	for (n in kaliciNesneler){


		var x = kaliciNesneler[n].x;
		var y = kaliciNesneler[n].y;
		var t = kaliciNesneler[n].t;

		if (t == "g"){
			ctxSabit.drawImage(gucRes, 0,0, gucRes.width, gucRes.height, x+farkX, y+farkY, gucRes.width, gucRes.height);
		}
		else if(t == "h"){
			ctxSabit.drawImage(hizRes, 0,0, hizRes.width, hizRes.height, x+farkX, y+farkY, hizRes.width, hizRes.height);		
		}

	}
}


function render(data){



	ctxSabit.clearRect(0,0, myc.width, myc.height);
	ctx.clearRect(0,0, myc.width, myc.height);

	c("Burasi Render");

	kaliciNesneCiz(kaliciNesneler);


	

	if (data && data.oyuncular){

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







