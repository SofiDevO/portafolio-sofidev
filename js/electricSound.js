const d = document;
const btnDarkMode = d.querySelectorAll("[data-toogle]")

function playSound(){

    let audio = new Audio();
    audio.src = "../assets/sounds/profile-pic-2023-06-14T200602.499.svg";
    audio.volume -=0.7;
    audio.play()
}

export default btnDarkMode.forEach(boton => {
    boton.addEventListener('click', ()=>{
        playSound();
    })
});
    


