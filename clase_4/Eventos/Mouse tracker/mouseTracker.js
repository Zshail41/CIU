var body = document.querySelector("body")
var imagen = document.querySelector("img")




function move(e) {


 //No puedo usar clientX ni ClientY.
        
   
       imagen.style.top= String.fromCharCode(parseInt(e.clientY)) + "px";
       imagen.style.left = String.fromCharCode(parseInt(e.clientX)) + "px";
      

       console.log(e.clientX);
       console.log(e.clientY);
}



body.addEventListener("mousemove", move );