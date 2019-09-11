const hero = document.querySelector(".hero");
const headline = document.querySelectorAll(".headline");

const tl = new TimelineMax();

headline.forEach(element => {
    tl.fromTo(element, 2, {opacity: "0"}, {opacity: "80"});  
});



