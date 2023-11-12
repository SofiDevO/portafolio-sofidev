const d = document;


let darkModeState = true;

const toogleDarkMode = d.querySelectorAll("[data-toogle]");


// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");

// Toggles the "dark-mode" class
export default function toggleDarkMode(state) {
  d.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state; 
  if(d.documentElement.classList.contains("dark-mode")){
    toogleDarkMode.forEach(darkMode => {
      darkMode.classList.remove("bi-lightning-charge");
      darkMode.classList.add("bi-lightning-charge-fill");
    });
  }else{
    toogleDarkMode.forEach(darkMode => {
      darkMode.classList.remove("bi-lightning-charge-fill");
      darkMode.classList.add("bi-lightning-charge");
    });
  } 

} 


// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") == "true");

// Listen for changes in the OS settings.
// Note: the arrow function shorthand works only in modern browsers,
// for older browsers define the function using the function keyword.
useDark.addEventListener('state',(evt) => toggleDarkMode(evt.matches));

// Toggles the "dark-mode" class on click and sets localStorage state



toogleDarkMode.forEach(toogle => {
  toogle.addEventListener("click", (event) => {
    darkModeState = !darkModeState;
  
    toggleDarkMode(darkModeState);
    setDarkModeLocalStorage(darkModeState);
  });
});


