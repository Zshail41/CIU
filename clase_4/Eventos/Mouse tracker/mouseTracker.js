var body = document.querySelector("body")
var imagen = document.querySelector("img")




function move(e) {


 //No puedo usar clientX ni ClientY.
        
   
       imagen.style.top= e.clientY.toString() + "px";
       imagen.style.left = e.clientX.toString() + "px";
      

       console.log(e.clientX);
       console.log(e.clientY);
}



body.addEventListener("mousemove", move );