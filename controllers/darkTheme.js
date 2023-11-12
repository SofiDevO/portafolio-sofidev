const d = document;
export let darkModeState = false;
const toogleDarkMode = d.querySelector("[data-toogle]");

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
const useCircuit = window.matchMedia("(prefers-color-scheme: short-circuit)");

// Toggles the "dark-mode" class
export default function toggleDarkMode(state) {
  d.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state; 
  if(d.documentElement.classList.contains("dark-mode")){
      toogleDarkMode.classList.remove("bi-lightning-charge");
      toogleDarkMode.classList.add("bi-lightning-charge-fill");
  }else{
      toogleDarkMode.classList.remove("bi-lightning-charge-fill");
      toogleDarkMode.classList.add("bi-lightning-charge");
  } 
} 

// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") == "true");
let botonShortCut = 0;

// Listen for changes in the OS settings.
useDark.addEventListener('state',(evt) => toggleDarkMode(evt.matches));
// Toggles the "dark-mode" class on click and sets localStorage state
toogleDarkMode.addEventListener("click",  (clickHandler)=>{
  darkModeState = !darkModeState;
})
function clickHandler() {
  botonShortCut++;
  console.log(botonShortCut)
	if (botonShortCut <= 8) {
    toggleDarkMode(darkModeState);
    setDarkModeLocalStorage(darkModeState);
	} else if (botonShortCut <= 15) {
    document.documentElement.classList.add("short-circuit");
    document.documentElement.classList.remove("dark-mode");
	} else {
		alert("You messed up. Click here to reload");
        location.reload();
	}
}
toogleDarkMode.addEventListener("click", clickHandler);