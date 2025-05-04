
// end the Sky Move 
let stars = document.getElementById ("stars");
let moon = document.getElementById ("moon");
let mountains3 = document.getElementById ("mountains3");
let mountains4 = document.getElementById ("mountains4");
let river = document.getElementById ("river");
let boat = document.getElementById ("boat");
let hudhod = document.querySelector (".hudhod");


window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value * 7 + "px";
    moon.style.top = value * 3 + "px"
    mountains3.style.top = value * 2 + "px"
    mountains4.style.top = value * 1.5 + "px"
    river.style.top = value  + "px"
    boat.style.top = value + "px"
    boat.style.left = value * 3 + "px"
    hudhod.style.fontSize = value  + "px"
    if (value > 70 ){
        hudhod.style.fontSize = "70px";
        hudhod.style.position = "fixed";
        if (value > 440) {
            hudhod.style.display = "none";
        }else {
            hudhod.style.display = "block";
        }
        let theSkyMove = document.querySelector (".theSkyMove");
        if (value >= 279) {
            theSkyMove.style.background = "linear-gradient(#376281,#10001f)"
        }else {
            theSkyMove.style.background = "linear-gradient(#200016,#10001f)"
        }
    }

}
// end the Sky Move 
