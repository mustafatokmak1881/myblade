function reg_exp(count,regdata,longtext)
{
	var rege_x = new RegExp(regdata,"g");
	var regexp_out = rege_x.exec(longtext);
	return regexp_out[count];
}


function reg_exp(count,regdata,longtext)
{
	var rege_x = new RegExp(regdata,"g");
	var regexp_out = rege_x.exec(longtext);
	return regexp_out[count];
}

var alldatas = "SIng2KdQpMunO5MXAAAH,92,80;ENaZfuFa123mA1hgAAAI,92,80;";
function update_data(sck_id,plus_x,plus_y)
{
		var rege_x = new RegExp(sck_id+",(.*?),(.*?);","g");
		var regexp_out = rege_x.exec(alldatas);

		var dataid_info = sck_id+","+regexp_out[1]+","+regexp_out[2]+";";
		var dataid_info2 = sck_id+","+parseInt(regexp_out[1])+parseInt(plus_x)+","+parseInt(regexp_out[2])+parseInt(plus_y)+";";
		
		alldatas = alldatas.replace(dataid_info,dataid_info2);
		return (alldatas);
}

update_data("SIng2KdQpMunO5MXAAAH",10,10);