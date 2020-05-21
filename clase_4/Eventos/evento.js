var boton = document.querySelector("button")
var p = document.querySelector("p")
var body = document.querySelector("body")

var seEjecutaEnEvento = function(){
     p.insertAdjacentHTML("afterend", "<p> BEEP </p>")

     body.classList.toggle("color")}



boton.addEventListener("click", seEjecutaEnEvento)

