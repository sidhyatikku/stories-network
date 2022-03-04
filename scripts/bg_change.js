document.onmousemove = function(event) {
  	pointerX = event.pageX;
  	pointerY = event.pageY;
  }

var pointerX = 100;
var pointerY = 100;

setInterval(pointerCheck, 10);
function pointerCheck() {
  console.log('Cursor at: '+pointerX+', '+pointerY);
  document.getElementById('top-image').style.top=pointerX/100;
  document.getElementById('top-image').style.left=pointerY/100;
  document.getElementById('top-image').style.opacity=pointerX/1000;

}
