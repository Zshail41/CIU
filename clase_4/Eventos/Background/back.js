var inp = document.querySelector("input")
var bod = document.querySelector("body")

function cambiarColor(e){

    if(e.keyCode == 13){
        bod.style.backgroundColor = inp.value
    } else if (e.keyCode == 8 ){
        bod.style.backgroundColor = "white"
    }

    

} 

inp.addEventListener("keydown", cambiarColor)

