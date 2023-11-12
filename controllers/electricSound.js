const d = document;
const btnDarkMode = d.querySelector("[data-toogle]");

function shortCircuit(set_in_milisec) {
	let audio = new Audio();
	audio.src = "../assets/sounds/short_circuit.mp3";
	audio.volume -= 0.6;
	audio.play();
	setTimeout(() => { audio.pause(); }, 1900);
}




export default function   playSound() {
	let audio = new Audio();
	audio.src = "../assets/sounds/franks-electricity.mp3";
	audio.volume -= 0.7;
	audio.play();
}

let botonRayo = 0;

function clickSoun() {
	console.log(botonRayo)
	botonRayo++;
	if (botonRayo <= 8) {
		playSound();
	} else if (botonRayo <= 18) {
		shortCircuit();
	}
}

btnDarkMode.addEventListener("click", clickSoun);
