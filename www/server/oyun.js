

const timer = 60;
const baslangic_hizi = 16;
const ani_hizlanma_katsayisi = 7;
const baslangic_cani = 40;
const sinir_baslangic_X = 0;
const sinir_bitis_X = 1000;
const sinir_baslangic_Y = 0;
const sinir_bitis_Y = 1000;
const sinir_icfark= 64;
const botsayisi = 1;
const haritaSinirX = 3400;
const haritaSinirY = 2900;
const bicimsayisi = 9;

const rboy = 488;
const yboy = 293;

const bomba_sayisi = 5;
const guc_sayisi = 5;

const kaliciNesneler = [];

function kaliciNesneEkle(t,x,y,x2=false,y2=false){
	if (x2 && y2){
		var o = {t:t, x:x, y:y, x2:x2, y2:y2}
		kaliciNesneler.push(o);
	}
	else{
		var o = {t:t, x:x, y:y}
		kaliciNesneler.push(o);
	}

}

var sinir_ekle=()=>{
	kaliciNesneEkle("s",sinir_baslangic_X,sinir_baslangic_Y,sinir_bitis_X,sinir_bitis_Y);
}

sinir_ekle();

var guc_ekle=()=>{

	for (var a=0; a<guc_sayisi; a++){
	kaliciNesneEkle("g", Math.floor(Math.random() * sinir_bitis_X), Math.floor(Math.random()*sinir_bitis_Y));

	}
}

guc_ekle();



var bomba_ekle=()=>{
	for (var a=0; a<bomba_sayisi; a++){
	kaliciNesneEkle("b", Math.floor(Math.random() * sinir_bitis_X), Math.floor(Math.random()*sinir_bitis_Y));
	}
}

bomba_ekle();




var zeminikapla=()=>{

	for (let b=0; b<10; b++){
		kaliciNesneEkle("y", yboy*b,0);
		for (let i=0; i<10; i++){
			kaliciNesneEkle("y", yboy*b, yboy*i);
		}
	}
}
//zeminikapla();

function yolyap(){

	kaliciNesneEkle("z", 0, 0);
	kaliciNesneEkle("z", 0, rboy*1);
	kaliciNesneEkle("z", 0, rboy*2);
	kaliciNesneEkle("z", 0, rboy*3);
	kaliciNesneEkle("z", 0, rboy*4);
	kaliciNesneEkle("z", 0, rboy*5);



	kaliciNesneEkle("z", rboy*6, 0);
	kaliciNesneEkle("z", rboy*6, rboy*1);
	kaliciNesneEkle("z", rboy*6, rboy*2);
	kaliciNesneEkle("z", rboy*6, rboy*3);
	kaliciNesneEkle("z", rboy*6, rboy*4);
	kaliciNesneEkle("z", rboy*6, rboy*5);





	kaliciNesneEkle("r", rboy*1, 0);
	kaliciNesneEkle("r", rboy*2, 0);
	kaliciNesneEkle("r", rboy*3, 0);
	kaliciNesneEkle("r", rboy*4, 0);
	kaliciNesneEkle("r", rboy*5, 0);
	kaliciNesneEkle("r", rboy*6, 0);


	kaliciNesneEkle("r", rboy*1, rboy*5);
	kaliciNesneEkle("r", rboy*2, rboy*5);
	kaliciNesneEkle("r", rboy*3, rboy*5);
	kaliciNesneEkle("r", rboy*4, rboy*5);
	kaliciNesneEkle("r", rboy*5, rboy*5);
	kaliciNesneEkle("r", rboy*6, rboy*5);

}

//yolyap();







/*
for (var a=0; a<500; a++){
	kaliciNesneEkle("z", Math.floor(Math.random() * 30000), Math.floor(Math.random()*3000));
}
*/



const hersey = {
	oyuncular: {},
	nesne: []
}



const io = require("socket.io").listen(3011);
c("*:3011 portu dinlemede");

function c(d){
	console.log(d);
}
function cc(d){
	c("--------------------------------------------");
	c(d);
	c("--------------------------------------------");	
}

function kb(obj){
	c("KB: ");
	c(typeof obj);
	c((JSON.stringify(obj).length/1024).toFixed(1)+" KB");

}

function ci(){
	cc("Online: "+io.engine.clientsCount);
}
function fps(){
	cc("FPS: "+ Math.floor(1000/timer));

}


function wxybul(newx, newy, x, y)
{
	var fx = x-newx;
	var fy = y-newy;
	var wtoplam = Math.abs(fx)+Math.abs(fy);
	var wx = (fx/wtoplam)%wtoplam;
	var wy = (fy/wtoplam)%wtoplam;	
	var obj = {wx: wx.toFixed(2), wy: wy.toFixed(2)}

	return obj;			
}

function gucFarki(guc1,guc2){
	var t = guc1+guc2;
	var g1 = (guc1/t).toFixed(2);
	var g2 = (guc2/t).toFixed(2);
	return {g1:g1, g2: g2}
}

function yeniOyuncu(ad){
	var p = new Date().getTime();
	var o = {ad: "", b:0, x:0, y:0, k:0, a:0, wx:0, wy:0, h:baslangic_hizi, c:baslangic_cani, r:"", t:0, u:0, f:0, rx:0, ry:0, p:p}
	o.ad = ad;
	o.x = Math.floor(Math.random(sinir_baslangic_X) * sinir_bitis_X);
	o.y = Math.floor(Math.random() * 300);
	o.b = Math.floor(Math.random()*bicimsayisi);
	return o;
}



function pf(d1){
	return parseFloat(d1);
}





//Bot ekle
function botolustur(d){
	for (let i=0; i<d; i++){
		hersey.oyuncular["bot"+i] = yeniOyuncu("BOT"+i);
	}
}


botolustur(botsayisi);




io.on("connection", function(s){

	ci();
		s.emit("ilkgiris", {
			kaliciNesneler: kaliciNesneler
		});


	s.on("ilkgiris", function(data){
		hersey.oyuncular[s.id] = yeniOyuncu(data.ad);
	});

	s.on("tus", function(data){

		if (hersey && hersey.oyuncular && hersey.oyuncular[s.id]){ 
			hersey.oyuncular[s.id].k = data.keyCode;
		}

		
	});

	s.on("kord", function(data){


		if (hersey && hersey.oyuncular && hersey.oyuncular[s.id] && hersey.oyuncular[s.id].x && hersey.oyuncular[s.id].y){

			var wxytoplam = pf(data.wy+data.wy);

			if(wxytoplam <= 1){
				hersey.oyuncular[s.id].wx = data.wx;
				hersey.oyuncular[s.id].wy = data.wy;
				
			}
		}
		else{

		}



	});

	s.on("disconnect", function(){
		delete hersey.oyuncular[s.id];
	});


});









function oyunDongu(){



	if (hersey && hersey.oyuncular && Object.keys(hersey).length >0){
		/*			OYUNCULAR DÖNGÜSÜ BAŞLANGIÇ			*/
		for (var sid in hersey.oyuncular){
			if (hersey.oyuncular[sid] && hersey.oyuncular[sid].x && hersey.oyuncular[sid].y){
				if (hersey.oyuncular[sid].x >= sinir_baslangic_X-sinir_icfark && hersey.oyuncular[sid].x <= sinir_bitis_X+0 && hersey.oyuncular[sid].y >= sinir_baslangic_Y-sinir_icfark && hersey.oyuncular[sid].y <= sinir_bitis_Y+0){
				}
				else{
						try{
						
							io.to(sid).emit("oyunbitti", "");
							delete hersey.oyuncular[sid];
							return false;
						}catch(err){

						}					
				}
			}

			// A tuşu ile ilgili
			if (hersey && hersey.oyuncular && hersey.oyuncular[sid] && hersey.oyuncular[sid].t){
				hersey.oyuncular[sid].t -= 1;
			}
			if (hersey && hersey.oyuncular && hersey.oyuncular[sid] && hersey.oyuncular[sid].u){
				hersey.oyuncular[sid].u -= 1;
				if (hersey.oyuncular[sid].u>0){
					
				}
				else{
					hersey.oyuncular[sid].r = "s";
					hersey.oyuncular[sid].h = baslangic_hizi;
				}
			}




			if (hersey.oyuncular[sid] && hersey.oyuncular[sid].f && hersey.oyuncular[sid].f > 0){
				hersey.oyuncular[sid].f -= 1;
				hersey.oyuncular[sid].x -= (hersey.oyuncular[sid].rx*baslangic_hizi*2);
				hersey.oyuncular[sid].y -= (hersey.oyuncular[sid].ry*baslangic_hizi*2);
			}
			else{
				if (hersey.oyuncular[sid] && hersey.oyuncular[sid].rx){
					hersey.oyuncular[sid].rx = 0;
					hersey.oyuncular[sid].ry = 0;
				}
			}

			/*			Kendi kendisine çarpma durumunu engellemek için			*/
			for (var sid2 in hersey.oyuncular){
				if (sid2 != sid){



		


					var benimX = hersey.oyuncular[sid].x;
					var benimY = hersey.oyuncular[sid].y;

					var digerX = hersey.oyuncular[sid2].x;
					var digerY = hersey.oyuncular[sid2].y;



					var ben_ve_nesne_farki_X = Math.abs(digerX-benimX);
					var ben_ve_nesne_farki_Y = Math.abs(digerY-benimY);

					if (ben_ve_nesne_farki_X < 54 && ben_ve_nesne_farki_Y <54){
						console.log("Mybladeler çarpıştı.");

						if (hersey.oyuncular[sid].rx == 0 && hersey.oyuncular[sid].ry == 0){
							var R = wxybul(hersey.oyuncular[sid2].x, hersey.oyuncular[sid2].y, hersey.oyuncular[sid].x, hersey.oyuncular[sid].y);
							hersey.oyuncular[sid].rx = -1*(R.wx);
							hersey.oyuncular[sid].ry = -1*(R.wy);

						}


							/* Güce göre puan azaltma*/
						var g1 = gucFarki(hersey.oyuncular[sid].c, hersey.oyuncular[sid2].c).g1;
						var g2 = gucFarki(hersey.oyuncular[sid].c, hersey.oyuncular[sid2].c).g2;

						if (hersey.oyuncular[sid].u == hersey.oyuncular[sid2].u){
							/*  Çarpışma anında tuş hızlanma devre dışı*/
							hersey.oyuncular[sid].k = 0;
							hersey.oyuncular[sid2].k = 0;

							hersey.oyuncular[sid].f = 10;
							hersey.oyuncular[sid2].f = 10;

							/* Güce göre puan azaltma*/
							hersey.oyuncular[sid2].c -= g1*5;
							hersey.oyuncular[sid].c -= g2*5;


						}
						else if(hersey.oyuncular[sid].u < hersey.oyuncular[sid2].u){
							/*  Çarpışma anında tuş hızlanma devre dışı*/
							hersey.oyuncular[sid].k = 0;
							hersey.oyuncular[sid2].k = 0;
							hersey.oyuncular[sid].h = baslangic_hizi;

							hersey.oyuncular[sid].f = 80;
							hersey.oyuncular[sid2].f = 40;

							hersey.oyuncular[sid2].c += g1*5;
							hersey.oyuncular[sid].c -= g2*10;


						}
						else if(hersey.oyuncular[sid].u > hersey.oyuncular[sid2].u){
							/*  Çarpışma anında tuş hızlanma devre dışı*/
							hersey.oyuncular[sid].k = 0;
							hersey.oyuncular[sid2].k = 0;
							hersey.oyuncular[sid].h = baslangic_hizi;

							hersey.oyuncular[sid].f = 40;
							hersey.oyuncular[sid2].f = 80;

							hersey.oyuncular[sid2].c -= g1*10;
							hersey.oyuncular[sid].c += g2*5;


						}
		
					}
					else if(ben_ve_nesne_farki_X < 64 && ben_ve_nesne_farki_Y <64){
		
					}
					else{
						//console.log("--");
					}


				}
			}


					if (hersey.oyuncular[sid] && hersey.oyuncular[sid].c && hersey.oyuncular[sid].c < 1){
						
						try{
						
							io.to(sid).emit("oyunbitti", "");
							delete hersey.oyuncular[sid];
							return false;
						}catch(err){

						}
					}


							var k = hersey.oyuncular[sid].k;

							if(k == 113){

								if (hersey.oyuncular[sid].t == 0){
									hersey.oyuncular[sid].t = 50;
									hersey.oyuncular[sid].u = 3;
									hersey.oyuncular[sid].r = "m";
 									hersey.oyuncular[sid].h = baslangic_hizi*8;
									
								}

							}
							
							var yeniposX = pf(hersey.oyuncular[sid].x) + pf(hersey.oyuncular[sid].wx)*pf(hersey.oyuncular[sid].h);
							var yeniposY = pf(hersey.oyuncular[sid].y) + pf(hersey.oyuncular[sid].wy)*pf(hersey.oyuncular[sid].h);
							//if (yeniposX >= 0 && yeniposX <= haritaSinirX && yeniposY>=0 && yeniposY < haritaSinirY){
								hersey.oyuncular[sid].x = yeniposX;
								hersey.oyuncular[sid].y = yeniposY;
							//}
	





/*
								if (hersey.oyuncular[sid].a>=600){
									hersey.oyuncular[sid].a = 0; 
								}

								if (hersey.oyuncular[sid].a < 20){
									//hersey.oyuncular[sid].r = "k";
								}else if (hersey.oyuncular[sid].a >= 80 && hersey.oyuncular[sid].a < 120){
									//hersey.oyuncular[sid].r = "b";
								}
								else{
									if (hersey.oyuncular[sid].k == 97){
										if (hersey.oyuncular[sid].c > 10){
											hersey.oyuncular[sid].r = "m";
										}
										else{
											hersey.oyuncular[sid].r = "s";
										}
									}
									else{
										hersey.oyuncular[sid].r = "s";
									}
								}

*/

				/* Carpisma Baslangic*/
											
							if (kaliciNesneler && kaliciNesneler.length>0 && hersey.oyuncular[sid] && hersey.oyuncular[sid].x && hersey.oyuncular[sid].y){
								var benimX = hersey.oyuncular[sid].x;
								var benimY = hersey.oyuncular[sid].y;

								kaliciNesneler.forEach(function(kaliciNesne,k) {

									var ben_ve_nesne_farki_X = Math.abs(kaliciNesne.x-benimX);
									var ben_ve_nesne_farki_Y = Math.abs(kaliciNesne.y-benimY);



									if (ben_ve_nesne_farki_X < 36 && ben_ve_nesne_farki_Y <36 && kaliciNesne.t != "z" && kaliciNesne.t != "r" && kaliciNesne.t != "y"){
					

										if (kaliciNesne.t == "g"){


											if (hersey.oyuncular[sid] && hersey.oyuncular[sid].c && hersey.oyuncular[sid].c < 64){
												hersey.oyuncular[sid].c += 2;
												var knX = Math.floor(Math.random() * sinir_bitis_X);
												var knY = Math.floor(Math.random()*sinir_bitis_Y);
												kaliciNesneEkle("g", knX, knY);
												io.emit("kaliciNesneEkle",{
													t:"g",
													x:knX,
													y:knY
												});



												kaliciNesneler.splice(k, 1);
												io.emit("kaliciNesneSil", {
													k:k
												});

											}
			


										}
										else if(kaliciNesne.t == "b"){
											delete hersey.oyuncular[sid];
											io.to(sid).emit("oyunbitti", "");
										}			
										else if(kaliciNesne.t == "h"){
											hersey.oyuncular[sid].h += 1;
											
										}





									}




								});



							}

				/* Carpisma Bitis*/

			if (hersey && hersey.oyuncular && hersey.oyuncular[sid]){
				hersey.oyuncular[sid].a += 1;
			}
		}
		/*			OYUNCULAR DÖNGÜSÜ BİTİŞ			*/







		/*

			Buranın altına kod yazmak yok :)


		*/
		io.emit("hersey", hersey);

		//fps();
		//kb(hersey);
		
		console.log(hersey);



		
	}


}



var donguzaman = setInterval(function(){

	oyunDongu();

}, timer);

