var alldatas = {}
/*

alldatas[i] = {"x": 4,"y": 5,"t": 5,"c": 5,"h": 5,"wx": 1,"wy": 1}
*/


alldatas["p"] = {"x": 4,"y": 5}
//var pattern = "";




var topumboy = 38;
var carpisma_mesafesi = 3;
var hizlilik = 5;




var ters_id = "";
var rand_x = "";
var rand_y = "";
var tip = Math.floor(Math.random()*5);
var can  = 5;
var hiz = 10;

var way_x = 1;
var way_y = 1;

io = require("socket.io").listen(3000);
	
io.on("connection", function(socket){
	console.log("Online: "+io.engine.clientsCount);
	
	rand_x = Math.floor(Math.random()*300);
	rand_y = Math.floor(Math.random()*300);
	tip = Math.floor(Math.random()*5);



	alldatas[socket.id] = {"x": rand_x,"y": rand_y,"t": tip,"c": can,"h": hiz,"wx": way_x,"wy": way_y}
	

	console.log(alldatas);
	socket.on("disconnect",function(){
		console.log("Online: "+io.engine.clientsCount);
		delete alldatas[socket.id];
		console.log(alldatas);
	});

});


/*

	function coll_olayi(alldat,sck_id,mycoord_x,mycoord_y,plus_x,plus_y)
	{
		var benim_id, benim_x, benim_y, benim_tip, benim_can, benim_hiz, benim_way_x, benim_way_y;
		var ters_id, ters_x, ters_y, ters_tip, ters_can, ters_hiz, ters_way_x, ters_way_y;


		// Kendinle Çarpışma Hariç
		var rege_x = new RegExp(sck_id+",(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?);","g");
		var regexp_out = rege_x.exec(alldat);
		if (regexp_out)
		{
			benim_id = sck_id;
			benim_x = regexp_out[1];
			benim_y = regexp_out[2];
			benim_tip = regexp_out[3];
			benim_can = regexp_out[4];
			benim_hiz = regexp_out[5];
			benim_way_x = regexp_out[6];
			benim_way_y = regexp_out[7];


			var dataid_info = benim_id+","+benim_x+","+benim_y+","+benim_tip+","+benim_can+","+benim_hiz+","+benim_way_x+","+benim_way_y+";";
			alldat = alldat.replace(dataid_info,"");			
		}
	
		//alldat = alldat.replace(sck_id+","+regexp_out[1]+","+mycoord_y+","+regexp_out[3]+","+regexp_out[4]+","+regexp_out[5]+","+regexp_out[6]+","+regexp_out[7]+";","");
		
		
		// Pattern Hariç
		var prege_x = new RegExp("p,(.*?),(.*?);","g");
		var pregexp_out = prege_x.exec(alldat);
		if (pregexp_out)
		{
			var dataid_info = "p,"+pregexp_out[1]+","+pregexp_out[2]+","+pregexp_out[3]+";";
			alldat = alldat.replace(dataid_info,"");			
		}
	

		// Carpisma Hariç
		var cprege_x = new RegExp("c,(.*?),(.*?);","g");
		var cpregexp_out = cprege_x.exec(alldat);
		if (cpregexp_out)
		{
			var dataid_info = sck_id+","+cpregexp_out[1]+","+cpregexp_out[2]+","+cpregexp_out[3]+";";
			alldat = alldat.replace(dataid_info,"");			
		}
	


		
		var spl = alldat.split(';');		
		for (var spl_i=0; spl_i<(spl.length-1); spl_i++)
		{
			var spl_satir = spl[spl_i];
			var spl_vrgl = spl_satir.split(',');
			var allid = spl_vrgl[0];
			var allx = parseFloat(spl_vrgl[1]);
			var ally = parseFloat(spl_vrgl[2]);
			var allt = parseFloat(spl_vrgl[3]);
			var allc = parseFloat(spl_vrgl[4]);
			var allh = parseFloat(spl_vrgl[5]);
			var allwx = parseFloat(spl_vrgl[6]);
			var allwy = parseFloat(spl_vrgl[7]);


			if ((allid == "p")||(allid == "c"))
			{

			}
			else
			{
				if ((mycoord_x <= (parseFloat(allx)+topumboy))&&((mycoord_x >= (parseFloat(allx)-topumboy))) && (mycoord_y <= (parseFloat(ally)+topumboy))&&((mycoord_y >= (parseFloat(ally)-topumboy))))
				{
					//console.log("");
					//console.log("Carpisma");
					//console.log("");
					
					//Carspistiginda zit yone gitme formulu
					// plus_x = parseFloat(parseFloat(plus_x)*(-carpisma_mesafesi));
					// plus_y = parseFloat(parseFloat(plus_y)*(-carpisma_mesafesi));


					// var carpisma_etkisi = parseFloat(parseFloat(regexp_out[4])+parseFloat(0.5));
				
					// var dataid_info = sck_id+","+parseFloat(regexp_out[1])+","+parseFloat(regexp_out[2])+","+parseFloat(regexp_out[3])+","+parseFloat(regexp_out[4])+","+parseFloat(regexp_out[5])+";";
					// var dataid_info2 = sck_id+","+parseFloat(parseFloat(regexp_out[1]))+","+parseFloat(parseFloat(regexp_out[2]))+","+parseFloat(regexp_out[3])+","+carpisma_etkisi+","+parseFloat(regexp_out[5])+";";
			
					//alldatas = alldatas.replace(dataid_info,dataid_info2);
					// var ortala_x = parseFloat(parseFloat(parseFloat(regexp_out[1])+parseFloat(allx))/2);
					// var ortala_y = parseFloat(parseFloat(parseFloat(regexp_out[2])+parseFloat(ally))/2);
					
					// alldatas = alldatas+"c,"+ortala_x+","+ortala_y+";";
					
					

					// io.to(benim_id).emit("collision", {
					// 	'mtn'	:	'carpisma'
					// });
					ters_id = allid;
					ters_x = allx;
					ters_y = ally;
					ters_tip = allt;
					ters_can = allc;
					ters_hiz = allh;
					ters_way_x = allwx;
					ters_way_y = allwy;


					
					io.to(ters_id).emit("collision", {
						'mtn' : 'carpisma',
						'wx' : benim_way_x,
						'wy' : benim_way_y
					});


	
					var ters_carpisma_etkisi = parseFloat(parseFloat(ters_can)-parseFloat(1));
					var dataid_info = ters_id+","+parseFloat(ters_x)+","+parseFloat(ters_y)+","+parseFloat(ters_tip)+","+parseFloat(ters_can)+","+parseFloat(ters_hiz)+","+parseFloat(ters_way_x)+","+parseFloat(ters_way_y)+";";
					var dataid_info2 = ters_id+","+parseFloat(parseFloat(ters_x))+","+parseFloat(parseFloat(ters_y))+","+parseFloat(ters_tip)+","+ters_carpisma_etkisi+","+parseFloat(ters_hiz)+","+parseFloat(ters_way_x)+","+parseFloat(ters_way_y)+";";
			
					alldatas = alldatas.replace(dataid_info,dataid_info2);
					
					var benim_carpisma_etkisi = parseFloat(parseFloat(benim_can)+parseFloat(0.5));
					var benim_dataid_info = benim_id+","+parseFloat(benim_x)+","+parseFloat(benim_y)+","+parseFloat(benim_tip)+","+parseFloat(benim_can)+","+parseFloat(benim_hiz)+","+parseFloat(benim_way_x)+","+parseFloat(benim_way_y)+";";
					var benim_dataid_info2 = benim_id+","+parseFloat(parseFloat(benim_x))+","+parseFloat(parseFloat(benim_y))+","+parseFloat(benim_tip)+","+benim_carpisma_etkisi+","+parseFloat(benim_hiz)+","+parseFloat(benim_way_x)+","+parseFloat(benim_way_y)+";";
			
					alldatas = alldatas.replace(benim_dataid_info,benim_dataid_info2);
					
			

					
					 
					// io.emit("coord_response",{
					// 	'id'	: sck_id,
					// 	'x'	:	plus_x,
					// 	'y'	:	plus_y,
					// 	't'	:   allt,
					// 	'c'	:   allc,
					// 	'h'	:   allh
					// });	

					//ters_data(allid,plus_x,plus_y,parseFloat(regexp_out[3]),parseFloat(regexp_out[4]),parseFloat(regexp_out[5]));
					return 1;
				
				}
				else
				{
					// io.emit("collision", {
						// mtn	:	'--------'
					// });
					//return 0;
					//console.log("Carpismadik "+allid+"     "+(parseFloat(allx)+60)+":"+ally);
				}				
			}

		}
	}
	
	function update_data(sck_id,plus_x,plus_y)
	{
			var rege_x = new RegExp(sck_id+",(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?);","g");
			var regexp_out = rege_x.exec(alldatas);
			if (regexp_out)
			{
				gelen_id = sck_id;
				gelen_x = regexp_out[1];
				gelen_y = regexp_out[2];
				gelen_tip = regexp_out[3];
				gelen_can = regexp_out[4];
				gelen_hiz = regexp_out[5];
				gelen_way_x = regexp_out[6];
				geln_way_y = regexp_out[7];




				if (gelen_can < 0)
				{
					var dataid_info = gelen_id+","+gelen_x+","+gelen_y+","+gelen_tip+","+gelen_can+","+gelen_hiz+","+gelen_way_x+","+geln_way_y+";";
					alldatas = alldatas.replace(dataid_info,"");
					
					io.emit("removeuser",{
						'id' : socket.id
					});
					socket.emit("gameover", {
						'mtn' : 'Oyun Bitti'
					});
				}
				// if (alldatas.indexOf(parseFloat(parseFloat(regexp_out[1])+parseFloat(plus_x))+","+parseFloat(parseFloat(regexp_out[2])+parseFloat(plus_y)))> -1)
				// {
					// console.log("Carpisma");
					// io.emit("collision", {
						// mtn	:	'Carpisma'
					// });					
				// }

				if (coll_olayi(alldatas,sck_id,parseFloat(parseFloat(regexp_out[1])+parseFloat(plus_x)),parseFloat(parseFloat(regexp_out[2])+parseFloat(plus_y)),parseFloat(plus_x),parseFloat(plus_y)) == 1)
				{
					console.log("Carpisma oldumu ?");
				}
				else
				{
					io.emit("coord_response",{
						'id'	: sck_id,
						'x'	:	plus_x,
						'y'	:	plus_y,
						't'	:   parseFloat(regexp_out[3]),
						'c'	:   parseFloat(regexp_out[4]),
						'h'	:   parseFloat(regexp_out[5]),
						'wx'	:   parseFloat(regexp_out[6]),
						'wy'	:   parseFloat(regexp_out[7])

					});

					var dataid_info = sck_id+","+parseFloat(regexp_out[1])+","+parseFloat(regexp_out[2])+","+parseFloat(regexp_out[3])+","+parseFloat(regexp_out[4])+","+parseFloat(regexp_out[5])+","+parseFloat(regexp_out[6])+","+parseFloat(regexp_out[7])+";";
					var dataid_info2 = sck_id+","+parseFloat(parseFloat(regexp_out[1])+parseFloat(plus_x))+","+parseFloat(parseFloat(regexp_out[2])+parseFloat(plus_y))+","+parseFloat(regexp_out[3])+","+parseFloat(regexp_out[4])+","+parseFloat(regexp_out[5])+","+parseFloat(plus_x)+","+parseFloat(plus_y)+";";

					alldatas = alldatas.replace(dataid_info,dataid_info2);
					console.log(sck_id+" "+plus_x+","+plus_y);
					console.log(alldatas);
					//console.log("Var");
					return (alldatas);
				}
				
			}
			else
			{
				//console.log("Yok");
			}
	}
	
	socket.on('koordinat', function(data){
			if ((data.x == "") || (data.x  == "NaN") || (data.x == "undefined") || (data.y == "") || (data.y  == "NaN") || (data.y == "undefined"))
			{}
			else{
				update_data(socket.id,parseFloat(data.x)*hizlilik,parseFloat(data.y)*hizlilik);	
			}

	});








*/
