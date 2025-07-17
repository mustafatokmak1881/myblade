

const timer = 60;
const baslangic_hizi = 14;
const ani_hizlanma_katsayisi = 5;
const baslangic_cani = 50;
const sinir_baslangic_X = 0;
const sinir_bitis_X = 2500;
const sinir_baslangic_Y = 0;
const sinir_bitis_Y = 2500;
const sinir_icfark= 55;
const botsayisi = 0;
const bot_alt_limiti = 3; // Mobilde daha az bot

const bicimsayisi = 9;

const rboy = 488;
const yboy = 293;

const bomba_sayisi = 17;
const guc_sayisi = 150;
const yon_degisim_modu = 57;
const baslangic_t = 100;

const botAI_isimler = [
	"+Ayşegül",
	"+Elif46",
	"+Mahmut",
	"+Senelerce",
	"+Youtube delisi",
	"+manyak bu io",
	"+Şeref",
	"+Sajal",
	"+Rahul",
	"+Eljif",
	"+Natalia",
	"+I love you",
	"+Dennis",
	"+Ebu",
	"+Tarık",
	"+Lewis",
	"+Max",
	"+Lovest",
	"+LongerMan",
	"+Catwomen",
	"+wc",
	"+xmen",
	"+Americaller",
	"+ArsenalMagic",
	"+AspStacey",
	"+Axondsca",
	"+Ballisman",
	"+BeastLife",
	"+Bigglipson",
	"+BoardinSkate",
	"+BoboCetic",
	"+BraceSublime",
	"+Branner",
	"+Bunkslank",
	"+CaptainBloom",
	"+ChampMs",
	"+ChariSuave",
	"+Chatell",
	"+ChatGrant",
	"+Chemelec",
	"+Cnidasite",
	"+Coterweb",
	"+CriticSmooth",
	"+Depargo",
	"+Devexsoft",
	"+Diddybion",
	"+Dioceryal",
	"+Dispate",
	"+DoggGeneral",
	"+Dragonemco",
	"+Dramanderan",
	"+DrBall",
	"+Elementosco",
	"+Envisymee",
	"+Faitheredba",
	"+Feeditat",
	"+Fireeranco",
	"+FluentHeadlines",
	"+Forbustanc",
	"+ForCrescent",
	"+Fullyleweek",
	"+Globsezw",
	"+GreyEvents",
	"+Ayşegül",
	"+Elif46",
	"+Mahmut",
	"+Senelerce",
	"+Youtube delisi",
	"+manyak bu io",
	"+Şeref",
	"+Sajal",
	"+Rahul",
	"+Eljif",
	"+Natalia",
	"+I love you",
	"+Dennis",
	"+Ebu",
	"+Tarık",
	"+Lewis",
	"+Max",
	"+Lovest",
	"+LongerMan",
	"+Catwomen",
	"+wc",
	"+xmen",
	"+ahmet",
	"+ali",
	"+akif",
	"+türk gücü",
	"+deli adam",
	"+kara",
	"+deliyurek",
	"+polat",
	"+emre mor",
	"+messi",
	"+barca",
	"+xx",
	"+XxX",
	"+ccc",
	"+hakki",
	"+Ayşegül",
	"+Pelin",
	"+iremsulu köfte",
	"+jelibon",
	"+sakız",
	"+naneli sakız",
	"+katmer",
	"+einstein",
	"+bacanak",
	"+anonim",
	"+belkis",
	"+aykiz",
	"+hadi deli oğlan",
	"+hadiseli",
	"+can38",
	"+007",
	"+Kod adı adsız",
	"+nazan",
	"+io sever",
	"+android",
	"+tekir",
	"+köfteci",
	"+lale",
	"+konyalı",
	"+Dadaş",
	"+kız",
	"+vay canına",
	"+delimanyak",
	"+youtuber",
	"+sibermanyak",
	"+deli",
	"+manyak",
	"+delikanlı kız",
	"+fareli köy",
	"+Ronaldo",
	"+Ronaldinho",
	"+Real Sivas",
	"+Villareal",
	"+Beşiktaşk",
	"+cimbom",
	"+fener",
	"+fenerli",
	"+çaydanlık",
	"+laz uşağı",
	"+sarı lacivert",
	"+bayrak",
	"+beni sev",
	"+dokunma yanarsın",
	"+acı bana",
	"+oyun kaç kaç",
	"+sinek",
	"+seni sinek gibi avlıcam"
];


//const botAI_isimler = ["A.I.", "A.I."];

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
	nesne: [],
	sunucusaati: 0
}



const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// Statik dosyaları serve et
app.use(express.static(__dirname + "/../"));

// Ana sayfa route'u
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/../index.html");
});

server.listen(3011, function() {
    c("*:3011 portu dinlemede");
    c("HTML dosyası http://localhost:3011 adresinden erişilebilir");
});

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
	o.y = Math.floor(Math.random(sinir_baslangic_Y) * sinir_bitis_Y);
	o.b = Math.floor(Math.random()*bicimsayisi);
	

	return o;
}



function pf(d1){
	return parseFloat(d1);
}


function hizlan(sid,o){

	hersey.oyuncular[sid].t = baslangic_t;
	hersey.oyuncular[sid].u = 10;
	hersey.oyuncular[sid].r = "m";
	hersey.oyuncular[sid].h = baslangic_hizi*ani_hizlanma_katsayisi;
	hersey.oyuncular[sid].wx = o.wx*-1;
	hersey.oyuncular[sid].wy = o.wy*-1;	
}

function botAIBombaKacis(sid, sid2){
							if (kaliciNesneler && kaliciNesneler.length>0 && hersey.oyuncular[sid] && hersey.oyuncular[sid].x && hersey.oyuncular[sid].y){
								let benimX = hersey.oyuncular[sid].x;
								let benimY = hersey.oyuncular[sid].y;

								kaliciNesneler.forEach(function(kaliciNesne,k) {

									let ben_ve_nesne_farki_X = Math.abs(kaliciNesne.x-benimX);
									let ben_ve_nesne_farki_Y = Math.abs(kaliciNesne.y-benimY);



									if (ben_ve_nesne_farki_X < 100 && ben_ve_nesne_farki_Y < 100 && kaliciNesne.t != "z" && kaliciNesne.t != "r" && kaliciNesne.t != "y")
									{


											if(kaliciNesne.t == "b"){
												let fx = kaliciNesne.x-benimX;
												let fy = kaliciNesne.y-benimY;

												if (fx<0){
													hersey.oyuncular[sid].wx = Math.abs(botAI_rastgele_yon_ver(sid).wx);

												}
												else{
													hersey.oyuncular[sid].wx = Math.abs(botAI_rastgele_yon_ver(sid).wx)*-1;
												}

												if (fy<0){
													hersey.oyuncular[sid].wy = Math.abs(botAI_rastgele_yon_ver(sid).wy);

												}
												else{
													hersey.oyuncular[sid].wy = Math.abs(botAI_rastgele_yon_ver(sid).wy)*-1;
												}



											}												
											else if(kaliciNesne.t == "h"){
											
												
											}
											else{

												if (kaliciNesne.t == "g"){
													/* Güce ihtiyac varsa güce doğru git*/
													if (hersey.oyuncular[sid].c<60){
														let o = wxybul(kaliciNesne.x, kaliciNesne.y, benimX, benimY);
														hersey.oyuncular[sid].wx = o.wx*-1;
														hersey.oyuncular[sid].wy = o.wy*-1;														
													}
												}												
											}
									}
									else{
											let benimX = hersey.oyuncular[sid].x;
											let benimY = hersey.oyuncular[sid].y;
											let ben_ve_nesne_farki_X = Math.abs(hersey.oyuncular[sid2].x-benimX);
											let ben_ve_nesne_farki_Y = Math.abs(hersey.oyuncular[sid2].y-benimY);

											if (ben_ve_nesne_farki_X < 200  && ben_ve_nesne_farki_Y < 200){

												/*  Benim canım onunkinden azsa hızlı vuruş yap */
												let o = wxybul(hersey.oyuncular[sid2].x, hersey.oyuncular[sid2].y, benimX, benimY);
												if (hersey.oyuncular[sid].c < hersey.oyuncular[sid2].c && hersey.oyuncular[sid2].t == 0){

													let suan = new Date().getTime();
													let rast = Math.floor(Math.random()*10);
													if (suan%yon_degisim_modu==rast && hersey.oyuncular[sid].t == 0){

														hizlan(sid,o);
													}
													else{

														if (hersey.oyuncular[sid].c < 30){
															hersey.oyuncular[sid].wx = o.wx;
															hersey.oyuncular[sid].wy = o.wy;	
														}else{
															hersey.oyuncular[sid].wx = o.wx*-1;
															hersey.oyuncular[sid].wy = o.wy*-1;	
														}
													}

												}
												else{
													let suan = new Date().getTime();
													let rast = Math.floor(Math.random()*10);
													if (suan%yon_degisim_modu==rast && hersey.oyuncular[sid].t == 0){

														hizlan(sid,o);
													}
													else{
														if (hersey.oyuncular[sid].c < 30){
															hersey.oyuncular[sid].wx = o.wx;
															hersey.oyuncular[sid].wy = o.wy;	
														}else{
															hersey.oyuncular[sid].wx = o.wx*-1;
															hersey.oyuncular[sid].wy = o.wy*-1;	
														}
													}

												}

											}



									}
								});
							}


}










function botAI_rastgele_yon_ver(sid){
	let rastX = Math.floor(Math.random(sinir_baslangic_X)*sinir_bitis_X);
	let rastY = Math.floor(Math.random(sinir_baslangic_Y)*sinir_bitis_Y);
	let o = wxybul(rastX, rastY, hersey.oyuncular[sid].x, hersey.oyuncular[sid].y);	
	return o;
}


function botAI(sid, sid2){
	if (sid.indexOf("bot")>-1){
		
		//Sınırlara gelince uzaklaş.
		if (hersey.oyuncular[sid].x <= sinir_baslangic_X+10){
			hersey.oyuncular[sid].wx = Math.abs(botAI_rastgele_yon_ver(sid).wx);
		}
		if (hersey.oyuncular[sid].x >= sinir_bitis_X-100){
			hersey.oyuncular[sid].wx = Math.abs(botAI_rastgele_yon_ver(sid).wx)*-1;
		}
		if (hersey.oyuncular[sid].y <= sinir_baslangic_Y){
			hersey.oyuncular[sid].wy = Math.abs(botAI_rastgele_yon_ver(sid).wy);
		}
		if (hersey.oyuncular[sid].y >= sinir_bitis_Y-100){
			hersey.oyuncular[sid].wy = Math.abs(botAI_rastgele_yon_ver(sid).wy)*-1;
		}





		//Rastgele durumlarda yön değiştir.
		let suan = new Date().getTime();
		if (suan%yon_degisim_modu == 1){

			hersey.oyuncular[sid].wx = botAI_rastgele_yon_ver(sid).wx;
			hersey.oyuncular[sid].wy = botAI_rastgele_yon_ver(sid).wy;				
		}

		if (hersey.oyuncular[sid].wx == 0 && hersey.oyuncular[sid].wy == 0){


				hersey.oyuncular[sid].wx = botAI_rastgele_yon_ver(sid).wx;
				hersey.oyuncular[sid].wy = botAI_rastgele_yon_ver(sid).wy;


		}



		botAIBombaKacis(sid, sid2);






	}

}





//Bot ekle
function botolustur(d){
	//for (let i=0; i<d; i++){
		let rastgele_isim = Math.floor(Math.random()*(botAI_isimler.length-2));
		hersey.oyuncular["bot"+Math.floor(Math.random()* 1000000000)] = yeniOyuncu(botAI_isimler[rastgele_isim]);
	//}
}


//botolustur(botsayisi);




io.on("connection", function(s){

	ci();
		s.emit("ilkgiris", {
			kaliciNesneler: kaliciNesneler
		});


	s.on("ilkgiris", function(data){
		hersey.oyuncular[s.id] = yeniOyuncu(data.ad.substr(0,50));
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
	let sunucusaati = new Date().getTime();
	hersey.sunucusaati = sunucusaati;

	if (hersey && hersey.oyuncular && Object.keys(hersey).length >0){

		/* Botsayısı 10'dan az ise oluştur */
		let suan = new Date().getTime();
		if (Object.keys(hersey.oyuncular).length < bot_alt_limiti && suan%yon_degisim_modu == 1){
			botolustur(1);
		}



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
			if (hersey.oyuncular[sid] && hersey.oyuncular[sid].f>0){
				hersey.oyuncular[sid].r = "k";
			}
			else{
				hersey.oyuncular[sid].r = "s";
			}

			// A tuşu ile ilgili
			if (hersey && hersey.oyuncular && hersey.oyuncular[sid] && hersey.oyuncular[sid].t){
				hersey.oyuncular[sid].t -= 1;
			}
			if (hersey && hersey.oyuncular && hersey.oyuncular[sid] && hersey.oyuncular[sid].u){
				hersey.oyuncular[sid].u -= 1;
				if (hersey.oyuncular[sid].u>0){
					hersey.oyuncular[sid].r = "m";
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



					botAI(sid, sid2);


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

							hersey.oyuncular[sid].f = 5;
							hersey.oyuncular[sid2].f = 5;



							/* Güce göre puan azaltma*/
							hersey.oyuncular[sid2].c -= g1*5;
							hersey.oyuncular[sid].c -= g2*5;


							/* Puan artıyor */
							hersey.oyuncular[sid].p -= 40000;
						}
						else if(hersey.oyuncular[sid].u < hersey.oyuncular[sid2].u){
							/*  Çarpışma anında tuş hızlanma devre dışı*/
							hersey.oyuncular[sid].k = 0;
							hersey.oyuncular[sid2].k = 0;
							hersey.oyuncular[sid].h = baslangic_hizi;

							hersey.oyuncular[sid].f = 20;
							hersey.oyuncular[sid2].f = 10;

							hersey.oyuncular[sid2].c += g1*5;
							hersey.oyuncular[sid].c -= g2*10;


						}
						else if(hersey.oyuncular[sid].u > hersey.oyuncular[sid2].u){
							/*  Çarpışma anında tuş hızlanma devre dışı*/
							hersey.oyuncular[sid].k = 0;
							hersey.oyuncular[sid2].k = 0;
							hersey.oyuncular[sid].h = baslangic_hizi;

							hersey.oyuncular[sid].f = 10;
							hersey.oyuncular[sid2].f = 20;

							hersey.oyuncular[sid2].c -= g1*10;
							hersey.oyuncular[sid].c += g2*5;

							hersey.oyuncular[sid].p -= 80000;


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
									hersey.oyuncular[sid].t = baslangic_t;
									hersey.oyuncular[sid].u = 10;
									hersey.oyuncular[sid].r = "m";
 									hersey.oyuncular[sid].h = baslangic_hizi*ani_hizlanma_katsayisi;
									
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
												hersey.oyuncular[sid].p -= 5000;
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
				if (hersey.oyuncular && hersey.oyuncular[sid] && hersey.oyuncular[sid].u>0){
					hersey.oyuncular[sid].a += 6;
				}
				else{
					hersey.oyuncular[sid].a += 1;
				}
				
			}
		}
		/*			OYUNCULAR DÖNGÜSÜ BİTİŞ			*/







		/*

			Buranın altına kod yazmak yok :)


		*/
		if (Object.keys(hersey.oyuncular).length>0 || hersey.nesne.length>0){
			io.emit("hersey", hersey);
		}
		
	
		//fps();
		kb(hersey);
		ci();
		
		



		
	}


}



var donguzaman = setInterval(function(){

	oyunDongu();

}, timer);

