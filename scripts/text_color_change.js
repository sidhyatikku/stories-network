document.onmousemove = function(event) {
  	pointerX = event.pageX;
  	pointerY = event.pageY;
  }

var pointerX = 100;
var pointerY = 100;

setInterval(pointerCheck, 10);
function pointerCheck() {
  var r = Math.floor(pointerX/6);
  var g = Math.floor(pointerY/20);
  var b = Math.floor(pointerY/2);
  console.log('Cursor at: '+pointerX+', '+pointerY);

  console.log(r, g, b);
  var color = "rgb(" + r + ", " + g + ", " + b + ")";
  console.log(color);

  document.getElementById('intro_txt').style.color=color;

}
