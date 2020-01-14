// Your code goes here
const wiggleBus = document.querySelector(".intro img")
// console.log(wiggleBus);

//mouse enter - 1
wiggleBus.addEventListener("mouseenter", () => {
    wiggleBus.style.transform = "scale(1.1)";
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

//contextmenu - 6
const body = document.querySelector('body');
body.addEventListener("contextmenu", () => {
  body.style.backgroundColor ="sandybrown";
}) 

//stopPropagation
const header = document.querySelector('.intro');
header.addEventListener("contextmenu", (event) => {
    header.style.backgroundColor = "cyan";
    event.stopPropagation();
})


//drag - 7
imgContent[1].addEventListener("drag", () => {
    imgContent[1].src="https://pbs.twimg.com/media/EClVLecWwAAQFKN.jpg:large";
}) 

//mouseover - 8
const bottomImg = document.querySelector('.content-destination img');
bottomImg.addEventListener("mouseover", () => {
    bottomImg.src="https://img.srgcdn.com/e//V1JBbnlxNUFiMHNaTGJXUHl4NDIucG5n.jpg";
})

const destinationText = document.querySelectorAll(".destination p");
// console.log(destinationText);\
//keydown - 9
window .addEventListener("keydown", (event) => {
    // console.log(event); 
    destinationText[0].style.fontWeight = "bold";
    destinationText[1].style.textDecoration = "underline";
    destinationText[2].style.fontStyle= "italic";
})
//keyup - 10
window .addEventListener("keyup", () => {
    destinationText[0].style.fontWeight = "normal";
    destinationText[1].style.textDecoration = "none";
    destinationText[2].style.fontStyle= "normal";
})

//preventDefault
const nav = document.querySelectorAll('.nav-link');
nav.addEventListener('click', (event) => {
    event.preventDefault();
})