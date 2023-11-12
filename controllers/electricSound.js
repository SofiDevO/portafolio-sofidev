import toggleDarkMode from "../controllers/darkTheme.js"
const d = document;
const btnDarkMode = d.querySelectorAll("[data-toogle]")


function playIntro(time_in_milisec_volume, time_in_milisec){
    let audio = new Audio();
    audio.src = "../assets/sounds/LOKI Opening Theme.mp3";
    audio.volume -= 0.6;
    audio.play()
    setTimeout(() => {audio.volume -= 0.2;}, time_in_milisec_volume);
    setTimeout(() => { audio.pause() ;}, time_in_milisec);
}

function playSound(){
    let audio = new Audio();
    audio.src = "../assets/sounds/franks-electricity.mp3";
    audio.volume -=0.7;
    audio.play()
}

export default btnDarkMode.forEach(boton => {
    boton.addEventListener('click', ()=>{
        if(d.documentElement.classList.contains("dark-mode")){
            playIntro(7000, 11000);
        }else{
            playSound()
        }
    })

});
    


