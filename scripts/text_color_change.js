document.onmousemove = function(event) {
  	pointerX = event.pageX;
  	pointerY = event.pageY;
  }

var pointerX = 100;
var pointerY = 150;

setInterval(pointerCheck, 10);
function pointerCheck() {
  var r = Math.floor(pointerX/6);
  var g = Math.floor(pointerY/20);
  var b = Math.floor(pointerY/2);

  var r1 = Math.floor(pointerY/5);
  var g1 = Math.floor(pointerX/20);
  var b1 = Math.floor(pointerX/10);

  console.log('Cursor at: '+pointerX+', '+pointerY);

  console.log(r, g, b);
  var color = "rgb(" + r + ", " + g + ", " + b + ")";
  var bgColor = "rgb(" + r1 + ", " + g1 + ", " + b1 + ")";
  console.log(color);

  document.getElementById('intro_txt').style.color=color;
  document.getElementById('top-image').style.background=bgColor;

}
