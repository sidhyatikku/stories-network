document.onmousemove = function(event) {
  	pointerX = event.pageX;
  	pointerY = event.pageY;
  }

var pointerX = 50;
var pointerY = 100;
var zZ = -10;

setInterval(pointerCheck, 10);
function pointerCheck() {
  console.log('Cursor at: '+pointerX+', '+pointerY);
  document.getElementById('top-image').style.opacity=pointerY/1000;

}
