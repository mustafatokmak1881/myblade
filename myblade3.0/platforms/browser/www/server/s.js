
const io = require("socket.io").listen(7777);


function c(d){
	console.log(d);
}
function ci(){
	c(io.engine.clientsCount);
}


io.on("connection", function(){
	ci();
});