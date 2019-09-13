const hero = document.querySelector(".hero");
const headline = document.querySelectorAll(".headline");
const hamburg = document.querySelector(".hamburger")
const _nav_links = document.querySelectorAll("._nav_links");
const tl = new TimelineMax();

headline.forEach(element => {
    //tl.fromTo(element, 2, {}, {opacity: "80"});  
    tl.fromTo(element, 0.5, {/*y:-200,*/ opacity: 0}, {/*y:0,*/ opacity:80, ease: Power1.easeIn});
});
hamburg.addEventListener("click", ()=>{
    _nav_links.forEach(element => {
        //tl.To(element, 0.5, {display: "flex"})
        element.className += "temp";
    })
    
});



