var sabit_x = 0;
var sabit_y = 0;

var yeni_x = 0;
var yeni_y = 0;

var fark_x = 0;
var fark_y = 0;

var way_x = 0;
var way_y = 0;


var ben_x = 0;
var ben_y = 0;


function pf(deger){
	return parseFloat(deger);
}


function find_way(touchstart_x, tmove_x,touchstart_y, tmove_y){
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
}

function yonbul(sabitx, yenix, sabity, yeniy){
	var farkx = pf(pf(yenix) - pf(sabitx));
	var farky = pf(pf(yeniy) - pf(sabity));

	var yuzdeyuz = farkx + farky;

	yonx = yuzdeyuz / farkx;
	yony = yuzdeyuz / farky;


	yon_x = yonx;
	yon_y = yony;
	console.log({"yon_x":yonx, "yon_y":yony});
}