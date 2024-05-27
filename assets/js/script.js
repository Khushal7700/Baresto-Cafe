                                            // HEADER - PADDING REMOVE ON SCROLL
const header = document.querySelector("header");

window.addEventListener("scroll",(e) => {
    if(window.pageYOffset >= 5){
        header.classList.add("scroll-down");
    }else{
        header.classList.remove("scroll-down")
    }
});

                                            // HIDE & SHOW NAV IN MOBILE VIEW

const hamburger = document.querySelector(".hamburger-icon");
const headernavul = document.querySelector("#header-nav-ul");
hamburger.addEventListener("click",() => {
   if(!hamburger.classList.contains("active")){
     hamburger.classList.add("active");
     headernavul.classList.add("navulactive")
    }else{
        hamburger.classList.remove("active");
        headernavul.classList.remove("navulactive")
    }
});

                                            // PRE-LOADER 
const loader = document.querySelector("#pre-loader");

window.addEventListener("load",() => {
    setTimeout(() => {
        loader.style.display = "none"
    }, 1400);
})

                                            // CUSTOM CURSER JS
// const dot = document.querySelector("#dot");
// const circle = document.querySelector("#circle");

// window.addEventListener("mousemove",(e) => {
//     const x = e.clientX + "px";
//     const y = e.clientY + "px";

//     dot.style.left = x;
//     dot.style.top = y;

//     circle.animate({
//         left:x,
//         top:y
//     },{duration:500,fill:"forwards"})
// })
