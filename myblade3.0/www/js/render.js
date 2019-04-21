var myc = document.getElementById("myc");
var ctx = myc.getContext(myc);
myc.width = screen.width;
myc.height = screen.height;
cc(myc.width);
cc(myc.height);


function render(data){
	cc(data);
}