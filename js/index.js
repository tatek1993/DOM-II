// Your code goes here
const wiggleBus = document.querySelector(".intro img")
// console.log(wiggleBus);

//mouse enter - 1
wiggleBus.addEventListener("mouseenter", () => {
    wiggleBus.style.transform = "scale(1.5)";
    wiggleBus.style.transition = "transform 0.2s"
})

//mouse leave - 2
wiggleBus.addEventListener("mouseleave", () => {
    wiggleBus.style.transform = "scale(1)";
    
})

const logoHeading = document.querySelector(".logo-heading");

//click - 3
logoHeading.addEventListener("click", () =>{
    logoHeading.textContent = "Eyy Honk Honk, Baby!"
})
//double click - 4
logoHeading.addEventListener("dblclick", () => {
    logoHeading.textContent = "What, you don't like honking?"
})

const imgContent = document.querySelector(".img-content img");

//resize - 5
window.addEventListener("resize", () => {
    imgContent.src="https://pbs.twimg.com/media/DkuFJdiX0AAymjI.jpg";
})