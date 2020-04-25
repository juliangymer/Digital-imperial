
var teclas = {
   UP: 38,
   DOWN: 40,
   LEFT: 37,
   RIGHT: 39,
   W: 87,
   A: 65,
   S: 83,
   D: 68,
};

var largo = document.getElementById("largo");
var grosor = document.getElementById("grosor");
var color = document.getElementById("cualColor");



document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 400;
var y = 190;

dibujarBorde("black", 1, 1, 800, 1, papel);
dibujarBorde("black", 1, 1, 1, 400, papel);
dibujarBorde("black", 799, 410, 799, 1, papel);
dibujarBorde("black", 1, 380, 800, 380, papel);


function dibujarBorde(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.lineWidth = 2;
   lienzo.moveTo(xinicial, yinicial);
   lienzo.lineTo(xfinal, yfinal);
   lienzo.stroke();
   lienzo.closePath();
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

function borrarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.lineWidth = parseFloat(grosor.value);
   lienzo.moveTo(xinicial, yinicial);
   lienzo.lineTo(xfinal, yfinal);
   lienzo.stroke();
   lienzo.closePath();
}

function dibujarTeclado(evento)
 {
   
   console.log(evento)
   
   var borrar = "white";
   var movimiento = parseFloat(largo.value);
   switch (evento.keyCode) {
      case teclas.W:
      borrarLinea(borrar, x, y, x, y - movimiento, papel);
       y = y - movimiento;
   break
   case teclas.S:
      borrarLinea(borrar, x, y, x, y + movimiento, papel);
       y = y + movimiento;
   break;
   case teclas.A:
      borrarLinea(borrar, x, y, x - movimiento, y, papel);
       x = x - movimiento;
   break
   case teclas.D:
      borrarLinea(borrar, x, y, x + movimiento, y, papel);
       x = x + movimiento;
      break;         

   }
   if (color.value == "rojo") {
      var colorcito = "red";
      switch (evento.keyCode) 
   {

   case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
       y = y - movimiento;
   break
   case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
       y = y + movimiento;
   break;
   case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
       x = x - movimiento;
   break
   case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
       x = x + movimiento;
      break}
   }
   else 
      var colorcito = color.value;
      switch (evento.keyCode) 
   {

   case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
       y = y - movimiento;
   break
   case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
       y = y + movimiento;
   break;
   case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
       x = x - movimiento;
   break
   case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
       x = x + movimiento;
      break}
   }