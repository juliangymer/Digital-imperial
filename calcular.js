var tablaDe = document.getElementById("tablas");
var parrafoTabla = document.getElementById("pTablas");
var enviarTablas = document.getElementById("enviarTablas");
var max = 10
enviarTablas.addEventListener("click", tablas);

function tablas()
{
   for (var i = 1; i <= max; i++) 
   {
      parrafoTabla.innerHTML = "<p>" + tablaDe.value * i + "</p";
   }
}




var porciento  = document.getElementById("%");
var porcentaje = document.getElementById("porcentaje");
var enviarPorcent = document.getElementById("enviarPorcentaje");
var parrafoPorcentaje = document.getElementById("parrafoPorcentaje")
enviarPorcent.addEventListener("click", enviarPorcentaje);

function enviarPorcentaje()
{
   parrafoPorcentaje.innerHTML =
   parseFloat(porciento.value) * parseFloat(porcentaje.value) / 100;
}



var valor = document.getElementById("valor");
var divisor = document.getElementById("divisor");
var enviar = document.getElementById("enviarDivisible");
var parrafoDivisor = document.getElementById("parrafoDivisor")
enviar.addEventListener("click", enviarNumeros);

function enviarNumeros() 
{
   if(valor.value % divisor.value == 0);
   {
      parrafoDivisor.innerHTML = "si";
   }  
   if (valor.value % divisor.value != 0)
   {
    parrafoDivisor.innerHTML = "no";  
   }
}
