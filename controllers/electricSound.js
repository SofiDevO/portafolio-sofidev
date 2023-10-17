const d = document;
const btnDarkMode = d.querySelectorAll("[data-toogle]")


function playSound(){
    let audio = new Audio();
    audio.src = "../assets/sounds/franks-electricity.mp3";
    audio.volume -=0.7;
    audio.play()
}

export default btnDarkMode.forEach(boton => {
    boton.addEventListener('click', ()=>{
        playSound();
    })
});
    


