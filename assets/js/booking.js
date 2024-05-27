const details = document.querySelectorAll(".form-col-4 input");
const place = document.querySelector('.form-col-4');
details.forEach(detail => {
    console.log(detail.attributes.id.nodeValue)
})
details.forEach(detail => {
    detail.addEventListener("blur",(e)=> {
        if(detail.value == '' || detail.value == undefined || detail.value == null) {
            // console.log(`please fill the form coorectlly ${detail.attributes.id.nodeValue}`);
            const span = document.createElement('span');
            span.innerHTML = `! please fill the form coorectlly ${detail.attributes.id.nodeValue}`;
            span.classList.add("validation")
            const x = e.target.offsetLeft;
            const y = e.target.offsetTop + 25 ;
            span.style.top = y + 'px';
            span.style.left = x + 'px';
            place.appendChild(span);
        }
        else{
                console.log(place.hasChildNodes)
        }
    })
})