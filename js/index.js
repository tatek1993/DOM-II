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
const defaultText = [];

for (let i = 0; i < destinationText.length; i++){
    defaultText[i] = destinationText[i].textContent;
}

// console.log(destinationText);\
//keydown - 9
window .addEventListener("keydown", (event) => {
    // console.log(event); 
    for (let i = 0; i < destinationText.length; i++){
        // destinationText[i].textContent = siteContent.nav['nav-item-'+(i+1)]
        destinationText[i].textContent = "You probably thought this Deer was alive. And this coyote was alive. And this Pheasant was alive? NOPE! No they’re not! They’re dead! They have been taxidermized by Chuck Testa. Ojai Valley Taxidermy Ojai, California 93023. I speacialize in the most life like dead animals anywhere. Peroid.Look at that Antelope driving a car! Nope! It’s just Chuck Testa.Oh no, there’s a bear in my bed! Nope! Chuck Testa.Hold on a second. There’s a Leopard feeding on an Impala out on my deck. Nope! It’s just Chuck Testa with another realistic mount. Ship to me from anywhere! (ship from anywhere!) Call Chuck Testa for the most life like dead animals around. Period.Did that Rhino just order a drink? Nope! Chuck Testa does not taxidermize pets!";
        destinationText[i].style.color = "green";
        destinationText[i].style.fontWeight = "bolder";
      }
})
//keyup - 10
window .addEventListener("keyup", () => {
    for (let i = 0; i < destinationText.length; i++){
        destinationText[i].textContent = defaultText[i];
        destinationText[i].style.color = "black";
        destinationText[i].style.fontWeight = "normal";
    }
})

//preventDefault
const nav = document.querySelectorAll('.nav-link');
nav.addEventListener('click', (event) => {
    event.preventDefault();
})