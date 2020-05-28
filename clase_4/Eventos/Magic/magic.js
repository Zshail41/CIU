var divv = document.getElementById("magic");
var imagen = document.querySelector("img");



function ocultar(){
    imagen.style.setProperty("opacity", "0")
}

function mostrar(){
    imagen.style.setProperty("opacity", "1")
}



divv.addEventListener("mouseover", ocultar)

divv.addEventListener("mouseleave", mostrar)