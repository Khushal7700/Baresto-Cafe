                                            // SLIDER JS
const bannerUL = document.querySelector("#banner-slider");
const bannerlis = Array.from(bannerUL.children);
const sliderleftbtn = document.querySelector("#slider-left-btn");
const sliderrightbtn = document.querySelector("#slider-right-btn");


let currentslider = bannerlis[0];
let nextslider = 0;

function nextslide(){
    if(nextslider >= bannerlis.length - 1){
        nextslider = 0;
    }else{
        nextslider++;
    }
    updateslider();
}

function previousslider(){
    if(nextslider <= 0){
        nextslider = bannerlis.length-1;
    }else{
        nextslider--;
    }
    updateslider();
}

function updateslider(){
    currentslider.classList.remove("current");
    currentslider = bannerlis[nextslider];
    currentslider.classList.add("current");
}

let sliderinterval;

function autoslider(){
    sliderinterval = setInterval(nextslide,5000);
}
window.addEventListener("load",autoslider);

                                    // WHEN MOUSE ENTER IN BANNER & BTNS  AUTOSLIDER STOP 

const banner = document.querySelector(".banner-main");
const allbannerbtn = document.querySelectorAll(".slider-btn");

banner.addEventListener("mouseover",() => {
    allbannerbtn.forEach(bannerbtn => {
        bannerbtn.classList.add("visible")
    });
    // clearInterval(sliderinterval)
})
banner.addEventListener("mouseleave",() => {
    allbannerbtn.forEach(bannerbtn => {
        bannerbtn.classList.remove("visible")
    });
    // autoslider()
});


allbannerbtn.forEach(bannerbtn => {
    bannerbtn.addEventListener("mouseover",() => {
        clearInterval(sliderinterval)
    })
})
allbannerbtn.forEach(bannerbtn => {
    bannerbtn.addEventListener("mouseleave",() => {
        autoslider()
    })
})

                                        // CLICK EVENT ON BTNS
                                        
sliderrightbtn.addEventListener("click",nextslide);
sliderleftbtn.addEventListener("click",previousslider);


                                    // INTERSECTION OBESERVER FOR SECTION EFFECTS
const sections = document.querySelectorAll("section");

const watchoption={
    threshold:0.2
};

function watchfunction(entries,watch){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("watch");
        }
    })
}

const watch = new IntersectionObserver(watchfunction,watchoption);

sections.forEach(section => {
    watch.observe(section)
});


                                // INTERSECTION OBESERVER FOR FLEX EFFECTS
const flexs = document.querySelectorAll(".flex");

const option = {
    threshold: 0.4,
}

const flexwatcher = new IntersectionObserver((entries,flexwatcher) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("watch");
        }
    })
},option)
flexs.forEach(flex => {
    flexwatcher.observe(flex)
})