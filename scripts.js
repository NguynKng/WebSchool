const menuBar = document.querySelector(".header-top .fa-bars")
const closeBar = document.querySelector(".header-top ul .fa-times")

menuBar.addEventListener("click", function(){
    document.querySelector(".header-top ul").style.transform = "translateX(0%)";
})

closeBar.addEventListener("click", function(){
    document.querySelector(".header-top ul").style.transform="translateX(100%)"
})