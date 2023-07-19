const d = document;
const btnRayo = d.getElementById("toggle-darkmodeHamburger")
const btnRayovacio = d.getElementById("toggle-ligthmodeHamburger")
const btnRayovacioDesktop = d.getElementById("toggle-ligthmode")
const btnRayoDesktop = d.getElementById("toggle-darkmode")

function playSound(){

    let audio = new Audio();
    audio.src = "../assets/sounds/franks-electricity.mp3";
    audio.volume -=0.7;
    audio.play()
}



export default btnRayo.addEventListener('click', ()=>{
    playSound();
})


/*  btnRayovacio.addEventListener('click', ()=>{
    playSound();
}) */

/* btnRayovacioDesktop.addEventListener('click', ()=>{
    playSound();
}) */
btnRayoDesktop.addEventListener('click', ()=>{
    playSound();
})


