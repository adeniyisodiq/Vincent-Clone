var menu_icon = document.getElementById("menu-icon");
var dropdown = document.getElementById("dropdown");
var open = false;
menu_icon.addEventListener("click", function(){
    if(open == false){
        dropdown.style.display="none"
        open = true
    }else{
        dropdown.style.display = "block"
        open = false
    }
})

// window.onscroll = function(){
//     console.log("scrolling")
// }

// window.addEventListener("scroll", function(){
//     // console.log(window.innerHeight)
//     // console.log(window.scrollH)
//     console.log("scrolling")
// })

var right_img = document.getElementsByClassName("right-img");
