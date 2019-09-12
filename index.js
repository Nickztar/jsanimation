const hero = document.querySelector(".hero");
const headline = document.querySelectorAll(".headline");

const tl = new TimelineMax();

headline.forEach(element => {
    //tl.fromTo(element, 2, {}, {opacity: "80"});  
    tl.fromTo(element, 1.5, {y:-200, opacity: 0}, {y:0, opacity:80, ease: Power1.easeIn});
});



