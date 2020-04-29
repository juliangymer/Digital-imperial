var teclas = {
   UP: 38,
   DOWN: 40,
   LEFT: 37,
   RIGHT: 39
};



var canvas = document.getElementById("canvas");
var lienzo = canvas.getContext("2d");
var cw = canvas.width =  800,
  cx = cw / 2;
var ch = canvas.height = 381,
  cy = ch / 2;

var color = document.getElementById("cualColor")
var grosor = document.getElementById("grosor")
var largo = document.getElementById("largo")

var dibujar = false;
lienzo.lineJoin = "round";

canvas.addEventListener('mousedown', function(evt) {
  dibujar = true;
  lienzo.beginPath();

}, false);

canvas.addEventListener('mouseup', function(evt) {
  dibujar = false;

}, false);

canvas.addEventListener("mouseout", function(evt) {
  dibujar = false;
}, false);

canvas.addEventListener("mousemove", function(evt) {
  if (dibujar) {
    var m = oMousePos(canvas, evt);
    lienzo.lineTo(m.x, m.y);
    lienzo.stroke();
    lienzo.lineWidth= grosor.value;
    lienzo.strokeStyle = color.value;
  }
}, false);

function oMousePos(canvas, evt) {
  var ClientRect = canvas.getBoundingClientRect();
  return { //objeto
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.lineWidth = parseFloat(grosor.value);
   lienzo.moveTo(xinicial, yinicial);
   lienzo.lineTo(xfinal, yfinal);
   lienzo.stroke();
   lienzo.closePath();
}

var movimiento = parseFloat(largo.value);
var x = 400;
var y = 190;
var colorcito = color.value
document.addEventListener("keydown", dibujarTeclado)

function dibujarTeclado(evento)
 {
   console.log(evento);
   
  
      switch (evento.keyCode) 
   {

   case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, lienzo);
       y = y - movimiento;
   break
   case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, lienzo);
       y = y + movimiento;
   break;
   case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, lienzo);
       x = x - movimiento;
   break
   case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, lienzo);
       x = x + movimiento;
      break
   }
   
   }