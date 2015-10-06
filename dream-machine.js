var cur = 0;
var speed=10;
var active=false;
var colors = new Array();
var i;
var hD="0123456789ABCDEF";

setcolor(255, 255, 255, 0);

function d2h(d) {
  var h = hD.substr(d&15,1);
  while(d>15) {d>>=4;h=hD.substr(d&15,1)+h;}
  if(h.length == 1) h = 0 + h; //pad to 2 chars
  return h;
}
function h2d(h) {
  return parseInt(h,16);
}

function setcolor(r, g, b, gradual) {
  restop();
  colors.length=0;
  colors.push('#000000');
  for(i=1; i<=gradual; i++) {
    colors.push('#' +
                d2h(Math.round(i*r/(gradual+1))) +
                d2h(Math.round(i*g/(gradual+1))) +
                d2h(Math.round(i*b/(gradual+1)))
               );
  }
  colors.push('#' + d2h(r) + d2h(g) + d2h(b));
  document.bgColor = colors[colors.length-1];
  for(i=gradual; i>=1; i--) {
    colors.push('#' +
                d2h(Math.round(i*r/(gradual+1))) +
                d2h(Math.round(i*g/(gradual+1))) +
                d2h(Math.round(i*b/(gradual+1)))
               );
  }
  restart();
}

function measure() {
}

measure();
var ccc=0;
function swap()
{ ccc++;
    document.bgColor = colors[cur];
    cur++;
    if(cur >= colors.length) cur = 0;
}
function disp() {
    document.getElementById('sp').innerHTML=speed + 'hz';
}
//var Now;
function start() {
//  Now = (new Date()).getTime();
  ccc = 0;
    if(!active)
       i = setInterval("swap()", Math.round(1000/speed/colors.length));
    active=true;
}
function stop() {
    active = false;
    clearInterval(i);
//  alert(1000 * (ccc/2) / ((new Date()).getTime()-Now) );
}
function restop() {
    clearInterval(i);
}
function restart() {
  if(active) {
    stop();
    start();
  }
}
