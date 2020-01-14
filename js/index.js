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
    logoHeading.textContent = "Gotcha! We doin taxidermy now, baby!"
})
//double click - 4
logoHeading.addEventListener("dblclick", () => {
    logoHeading.textContent = "Horrible, awful, taxidermy!"
})

const imgContent = document.querySelectorAll(".img-content img");
//resize - 5
window.addEventListener("resize", () => {
    imgContent[0].src="https://pbs.twimg.com/media/DkuFJdiX0AAymjI.jpg";
})

const body = document.querySelector('body');

//scroll - 6
window.addEventListener("scroll", () => {
  body.style.backgroundColor ="sandybrown";
}) 

//drag - 7
imgContent[1].addEventListener("drag", () => {
    imgContent[1].src="https://pbs.twimg.com/media/EClVLecWwAAQFKN.jpg:large";

}) 

//contextmenu
const bottomImg = document.querySelector('.content-destination img');
bottomImg.addEventListener("contextmenu", () => {
    bottomImg.src="https://img.srgcdn.com/e//V1JBbnlxNUFiMHNaTGJXUHl4NDIucG5n.jpg";
})

