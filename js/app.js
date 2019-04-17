


	/*

var socket = io.connect("http://192.168.1.99:3000");		
setInterval(function(){
	socket.emit("koordinat",{
		x : 0.01,
		y : 0.01
	});	
},30);
 
*/
	var alldatas = "";
	//var ip_adresi = "http://37.148.211.192:3000";
	var ip_adresi = "http://173.212.232.18:5000";

	var mouse_up = 0;
	var mouse_down = 0;
	var key_code = 0;

	var tmove_x = 0;
	var tmove_y = 0;
	var touchend_y = 0;
	var touchend_x = 0;
	var mouseup_x = 0;
	var mouseup_y = 0;
	var mousedown_x = 0;
	var mousedown_y = 0;
	var way_x = 0.5;
	var way_y = 0.5;
	var sck_x = 0;
	var sck_y = 0;
	var addplus = 60;		
	var split_screen_x = 0;
	var split_screen_y = 0;
	var cool_count = 0;
	var timer1;
function reg_exp(count,regdata,longtext)
{
	var rege_x = new RegExp(regdata,"g");
	var regexp_out = rege_x.exec(longtext);
	return regexp_out[count];
}

		$(document).ready(function(){








			var mypattern = document.getElementById("patternCanvas");
			var mypattern_ctx = mypattern.getContext("2d");
			mypattern.width = window.innerWidth;
			mypattern.height = window.innerHeight;

			var myshadow = document.getElementById("myshadowCanvas");
			var myshadow_ctx = myshadow.getContext("2d");
			myshadow.width = window.innerWidth;
			myshadow.height = window.innerHeight;
			
			var redshadow = document.getElementById("redshadowCanvas");
			var redshadow_ctx = redshadow.getContext("2d");
			redshadow.width = window.innerWidth;
			redshadow.height = window.innerHeight;
			
			var mynoshadow = document.getElementById("noshadowCanvas");
			var mynoshadow_ctx = mynoshadow.getContext("2d");
			mynoshadow.width = window.innerWidth;
			mynoshadow.height = window.innerHeight;
			
			// var mybigshape = document.getElementById("bigshapeCanvas");
			// var mybigshape_ctx = mybigshape.getContext("2d");
			// mybigshape.width = window.innerWidth;
			// mybigshape.height = window.innerHeight;
			
			// var mybtn = document.getElementById("btnCanvas");
			// var btn_ctx = mybtn.getContext("2d");
			// mybtn.width = window.innerWidth;
			// mybtn.height = window.innerHeight;
			
			var myc = document.getElementById("myCanvas");
			var ctx = myc.getContext("2d");
			myc.width = window.innerWidth;
			myc.height = window.innerHeight;
			
			var myctrl = document.getElementById("ctrlCanvas");
			var ctrl_ctx = myctrl.getContext("2d");
			myctrl.width = window.innerWidth;
			myctrl.height = window.innerHeight;
			
			var mycoll = document.getElementById("collCanvas");
			var mycoll_ctx = mycoll.getContext("2d");
			mycoll.width = window.innerWidth;
			mycoll.height = window.innerHeight;
			
			//top resmi
			var topum = new Image();
			topum.src = "ball0.png";
			topum.onload = function(){}
			
			var topum0 = new Image();
			topum0.src = "ball0.png";
			topum0.onload = function(){}
			
			var topum1 = new Image();
			topum1.src = "ball1.png";
			topum1.onload = function(){}
			
			var topum2 = new Image();
			topum2.src = "ball2.png";
			topum2.onload = function(){}
			
			var topum3 = new Image();
			topum3.src = "ball3.png";
			topum3.onload = function(){}
			
			var topum4 = new Image();
			topum4.src = "ball4.png";
			topum4.onload = function(){}
			
			var topum5 = new Image();
			topum5.src = "ball5.png";
			topum5.onload = function(){}
		
		//	Pattern
			var imageObj = new Image();
			imageObj.src = 'pattern.png';
			imageObj.onload = function(){}
		//	***************************
		
		//	Collision
			var collObj = new Image();
			collObj.src = 'coll.png';
			collObj.onload = function(){}
		//	***************************

			var screenx = (window.innerWidth / 2);
			var screeny = (window.innerHeight / 2);
			
			split_screen_x = parseFloat(parseFloat(window.innerWidth)/parseFloat(32));
			split_screen_y = parseFloat(parseFloat(window.innerHeight)/parseFloat(16));
			
			
			
			var touchstart_x = (3*split_screen_x);
			var touchstart_y = (13*split_screen_y);			
			
			//	Mini Shape
			// function mini_shape(x,y){
			// 	btn_ctx.clearRect(0,0, mybtn.width, mybtn.height);

			// 	//	MiniShape
			// 	if ((x <= (touchstart_x+addplus)) && (x > (touchstart_x-addplus)) && (y <= (touchstart_y+addplus)) && (y > (touchstart_y-addplus)))
			// 	{
			// 		btn_ctx.shadowColor = "black";
			// 		btn_ctx.shadowBlur = 30;
			// 		btn_ctx.shadowOffsetX = 8;
			// 		btn_ctx.shadowOffsetY = 8;	
			// 		btn_ctx.beginPath();
			// 		btn_ctx.arc(x, y, 15, 0*Math.PI, 2*Math.PI, 0);
			// 		//btn_ctx.lineWidth = 5;
			// 		btn_ctx.fillStyle = "black";
			// 		btn_ctx.fill();
			// 		btn_ctx.stroke();
			// 	}
				
			// }
			//	********************************************
			
			
			//	BigShape
			// mybigshape_ctx.shadowColor = "black";
			// mybigshape_ctx.shadowBlur = 30;
			// mybigshape_ctx.shadowOffsetX = 8;
			// mybigshape_ctx.shadowOffsetY = 8;			
			
			// mybigshape_ctx.beginPath();
			// mybigshape_ctx.arc(touchstart_x, touchstart_y, 50, 0, 2*Math.PI,0);
			// mybigshape_ctx.fillStyle = "transparent";
			// mybigshape_ctx.lineWidth = 3;
			// mybigshape_ctx.fill();
			// mybigshape_ctx.strokeStyle= "black";
			// mybigshape_ctx.stroke();
			// mini_shape(touchstart_x,touchstart_y);			
			//	*************************

	
function themes_shape(shape_ctx,allt,new_my_x,new_my_y)
{
			if (allt == 0)
			{
				shape_ctx.drawImage(topum0,new_my_x,new_my_y,topum0.width,topum0.height);

			}
			else if (allt == 1)
			{
				shape_ctx.drawImage(topum1,new_my_x,new_my_y,topum1.width,topum1.height);				
			}
			else if (allt == 2)
			{
				shape_ctx.drawImage(topum2,new_my_x,new_my_y,topum2.width,topum2.height);				
			}
			else if (allt == 3)
			{
				shape_ctx.drawImage(topum3,new_my_x,new_my_y,topum3.width,topum3.height);				
			}
			else if (allt == 4)
			{
				shape_ctx.drawImage(topum4,new_my_x,new_my_y,topum4.width,topum4.height);				
			}
			else if (allt == 5)
			{
				shape_ctx.drawImage(topum5,new_my_x,new_my_y,topum5.width,topum5.height);				
			}
			else
			{
				shape_ctx.drawImage(topum,new_my_x,new_my_y,topum.width,topum.height);				
			}		
}
		
function writecanvas()
{
	//ctx.clearRect(0,myc.height/3,myc.width+100,myc.height+100);
	//ctx.fillText(alldatas,0,myc.height/2);
	var spl = alldatas.split(';');
	
	mypattern_ctx.clearRect(0, 0, mypattern.width, mypattern.height);	
	ctrl_ctx.clearRect(0, 0, myctrl.width, myctrl.height);
	mynoshadow_ctx.clearRect(0, 0, mynoshadow.width, mynoshadow.height);
	myshadow_ctx.clearRect(0, 0, myshadow.width, myshadow.height);
	redshadow_ctx.clearRect(0, 0, redshadow.width, redshadow.height);
	mycoll_ctx.clearRect(0, 0, mycoll.width, mycoll.height);
	
	for (var spl_i=0; spl_i<(spl.length-1); spl_i++)
	{
		var spl_satir = spl[spl_i];
		var spl_vrgl = spl_satir.split(',');
		var allid = spl_vrgl[0];
		var allx = parseFloat(spl_vrgl[1]);
		var ally = parseFloat(spl_vrgl[2]);
		var allt = spl_vrgl[3];
		var allc = parseFloat(spl_vrgl[4]);
		var allh = parseFloat(spl_vrgl[5]);	
		var allh = parseFloat(spl_vrgl[5]);	
		var allwx = parseFloat(spl_vrgl[6]);	
		var allwy = parseFloat(spl_vrgl[7]);	


		if (allid == socket.id)
		{
			sck_x = allx;
			sck_y = ally;
						
			var screenx_myx = parseFloat(screenx)-parseFloat(sck_x);
			var new_my_x = parseFloat(allx)+screenx_myx-(topum.width/2);	
			var screeny_myy = parseFloat(screeny)-parseFloat(sck_y);
			var new_my_y = parseFloat(ally)+screeny_myy-(topum.height/2);
			
			
			mynoshadow_ctx.fillStyle = "white";
			mynoshadow_ctx.fillText(allid+"  Güç: "+allc,new_my_x,new_my_y-5);


			myshadow_ctx.shadowColor = "black";
			myshadow_ctx.shadowBlur = 15;
			myshadow_ctx.shadowOffsetX = 10;
			myshadow_ctx.shadowOffsetY = 10;
			themes_shape(myshadow_ctx,allt,new_my_x,new_my_y);			
		}
		else if(allid == "p")
		{
			var screenx_myx = parseFloat(screenx)-parseFloat(sck_x);
			var new_my_x = parseFloat(allx)+screenx_myx;									
			var screeny_myy = parseFloat(screeny)-parseFloat(sck_y);
			var new_my_y = parseFloat(ally)+screeny_myy;
			
			mypattern_ctx.shadowColor = "black";
			mypattern_ctx.shadowBlur = 30;
			mypattern_ctx.shadowOffsetX = 15;
			mypattern_ctx.shadowOffsetY = 15;				
			mypattern_ctx.drawImage(imageObj,new_my_x,new_my_y,imageObj.width,imageObj.height);			
		}
		else if(allid == "c")
		{
			var screenx_myx = parseFloat(screenx)-parseFloat(sck_x);
			var new_my_x = parseFloat(allx)+screenx_myx;									
			var screeny_myy = parseFloat(screeny)-parseFloat(sck_y);
			var new_my_y = parseFloat(ally)+screeny_myy;
			
			mycoll_ctx.shadowColor = "black";
			mycoll_ctx.shadowBlur = 15;
			mycoll_ctx.shadowOffsetX = 5;
			mycoll_ctx.shadowOffsetY = 5;				
			mycoll_ctx.drawImage(collObj,new_my_x,new_my_y,collObj.width,collObj.height);
			
		}
		else{
			var screenx_myx = parseFloat(screenx)-parseFloat(sck_x);
			var new_my_x = parseFloat(allx)+screenx_myx-(topum.width/2);	
			var screeny_myy = parseFloat(screeny)-parseFloat(sck_y);
			var new_my_y = parseFloat(ally)+screeny_myy-(topum.height/2);
			
			ctrl_ctx.shadowColor = "black";
			ctrl_ctx.shadowBlur = 15;
			ctrl_ctx.shadowOffsetX = 10;
			ctrl_ctx.shadowOffsetY = 10;


			mynoshadow_ctx.fillStyle = "lightgreen";			
			mynoshadow_ctx.fillText(allid+"  Güç: "+allc,new_my_x,new_my_y-5);			
			themes_shape(ctrl_ctx,allt,new_my_x,new_my_y);
		
		}	
		////console.log(spl_vrgl[1]);
	}
}			
			var socket = io.connect(ip_adresi);
			//var socket = io.connect("http://37.148.211.192:3000");
			
			socket.on("connect", function(){
				$("title").text("Connected: "+socket.id);
				writecanvas();
			});
			socket.on("firstconnect", function(data){
				alldatas = data.firstdata;
				//console.log(data.firstdata);
				writecanvas();
			});
			socket.on("adduser", function(data){
				alldatas = alldatas+data.id+","+data.x+","+data.y+","+data.t+","+data.c+","+data.h+","+data.wx+","+data.wy+";";

				//console.log(data.id+ " katildi");
				writecanvas();
			});
			socket.on("removeuser", function(data){
				//console.log(data.id+" ayrildi");
				if (alldatas.indexOf(data.id) > -1)
				{	
					var dataid_info = data.id+","+reg_exp(1,data.id+",(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?);",alldatas)+","+reg_exp(2,data.id+",(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?);",alldatas)+","+reg_exp(3,data.id+",(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?);",alldatas)+","+reg_exp(4,data.id+",(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?);",alldatas)+","+reg_exp(5,data.id+",(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?);",alldatas)+","+reg_exp(6,data.id+",(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?);",alldatas)+","+reg_exp(7,data.id+",(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?);",alldatas)+";";
					alldatas = alldatas.replace(dataid_info,"");
					//console.log(alldatas);
				}
				else{
					//console.log(data.id+" alldata icinde yok");
				}
				writecanvas();
			});
			socket.on("onlineuser", function(data){
				ctx.clearRect(0,0,myc.width,myc.height);
				ctx.font = "12px verdana";
				ctx.strokeText("Online: "+data.usercount,(29*(split_screen_x)),(1*split_screen_y));
			});
			socket.on("collision", function(data){
				//ctx.clearRect(0,0,mycoll.width,mycoll.height);
				//ctx.strokeText(cool_count+" Durum: "+data.mtn+" --> "+data.collx+":"+data.colly,(2*(split_screen_x)),(2*split_screen_y));
				cool_count++;
				//console.log(data.mtn+"  "+data.collx+":"+data.colly);
				console.log("Carpistiniz");
				if(data.mtn == "carpisma")
				{
					clearInterval(timer1);
					way_x = data.wx;
					way_y = data.wy;


				}
				writecanvas();
			});
			function update_data(sck_id,plus_x,plus_y,t,c,h,wx,wy)
			{
					var rege_x = new RegExp(sck_id+",(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?);","g");
					var regexp_out = rege_x.exec(alldatas);
					var dataid_info = sck_id+","+regexp_out[1]+","+regexp_out[2]+","+regexp_out[3]+","+regexp_out[4]+","+regexp_out[5]+","+regexp_out[6]+","+regexp_out[7]+";";
					var dataid_info2 = sck_id+","+parseFloat(parseFloat(regexp_out[1])+parseFloat(plus_x))+","+parseFloat(parseFloat(regexp_out[2])+parseFloat(plus_y))+","+parseFloat(t)+","+parseFloat(c)+","+parseFloat(h)+","+parseFloat(wx)+","+parseFloat(wy)+";";
					
					alldatas = alldatas.replace(dataid_info,dataid_info2);
					return (alldatas);
			}
			socket.on("coord_response", function(data){
				update_data(data.id,data.x,data.y,data.t,data.c,data.h,data.wx,data.wy);
				//console.log(alldatas);
				writecanvas();
			});
			socket.on("gameover", function(data){
				
				alert(data.mtn);

			});

			socket.on("timerile", function(data){
				console.log("timerile");
				console.log(data);
				alldatas = data;
				writecanvas();
			});


			function touchmove_func()
			{

				if ((tmove_x <= (touchstart_x+addplus)) && (tmove_x > (touchstart_x-addplus)) && (tmove_y <= (touchstart_y+addplus)) && (tmove_y > (touchstart_y-addplus)))
					{
						//	Create Buttons
						//mini_shape(tmove_x,tmove_y);
						//	***********************
						
						var np_f_x = (parseFloat(parseFloat(tmove_x)-parseFloat(touchstart_x)));
						var np_f_y = (parseFloat(parseFloat(tmove_y)-parseFloat(touchstart_y)));
						var f_x = Math.abs(parseFloat(parseFloat(tmove_x)-parseFloat(touchstart_x)));
						var f_y = Math.abs(parseFloat(parseFloat(tmove_y)-parseFloat(touchstart_y)));
						var t_xy = parseFloat(parseFloat(Math.abs(f_x))+parseFloat(Math.abs(f_y)));
						var f_bolu_x = (Math.abs(f_x)/Math.abs(t_xy));
						var f_bolu_y = (Math.abs(f_y)/Math.abs(t_xy));
						if (np_f_x<0)
						{
							f_bolu_x*=-1;
						}
						if (np_f_y<0)
						{
							f_bolu_y*=-1;
						}			
						way_x = f_bolu_x;
						way_y = f_bolu_y;

						//console.log("Touchmove: "+way_x+":"+way_y);
					}
			}
			document.body.addEventListener('touchmove', function(e){
				tmove_x = parseFloat(e.changedTouches[0].pageX);
				tmove_y = parseFloat(e.changedTouches[0].pageY);
				touchmove_func();


					socket.emit("koordinat",{
						x : parseFloat(parseFloat(way_x)*parseFloat(carpi)),
						y : parseFloat(parseFloat(way_y)*parseFloat(carpi))
					});					
			

			}, false)
			document.body.addEventListener('touchstart', function(e){
				tmove_x = parseFloat(e.changedTouches[0].pageX);
				tmove_y = parseFloat(e.changedTouches[0].pageY);
				touchmove_func();				
			}, false)
			document.body.addEventListener('keydown', function(e){			
			}, false)
			document.body.addEventListener('touchend', function(e){
				touchend_x = (e.changedTouches[0].pageX);
				touchend_y = (e.changedTouches[0].pageY);
			}, false)	
			document.body.addEventListener('mousedown', function(e){


			}, false)
			document.body.addEventListener('mouseup', function(e){
			
			}, false)
			document.body.addEventListener('mousemove', function(e){
				
			}, false)
			window.addEventListener('resize', function(e){

			},false)


		});