var radius = 60;
var position = 0;

var sampleJoystick = {
    mode: 'static',
    position: {
      left: '10%',
      bottom: '20%'
    },
    size: radius*2,
    color: 'black'
};

var joystick;
var position;
joystick = nipplejs.create(sampleJoystick);
joystick.on('start end', function(evt, data) {
  position = data;
}).on('move', function(evt, data) {
  position = data;
  sabit_x = position["instance"]["position"]["x"];
  sabit_y = position["instance"]["position"]["y"];

  yeni_x = position["position"]["x"];
  yeni_y = position["position"]["y"];

  find_way(sabit_x, yeni_x, sabit_y, yeni_y);

  
   // console.log(position["position"]["x"]+":"+position["position"]["y"]+"    "+ position["instance"]["position"]["x"]+":"+position["instance"]["position"]["y"]);
}).on('dir:up plain:up dir:left plain:left dir:down' +
      'plain:down dir:right plain:right',
      function(evt, data) {
  position=data;

}).on('pressure', function(evt, data) {
  position=data;
  //console.log("Basılıyken");
});

