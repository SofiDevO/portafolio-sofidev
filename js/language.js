const d = document;

const toogleLanguage = d.getElementById('idoma_icons');
const toogleLanguageMobile = d.getElementById('idoma_iconsMobile');

const iconEn = d.querySelector('.english');
const iconEs = d.querySelector('.espanol');
const iconMobileEn = d.querySelector('.englishMobile');
const  iconMobileEs = d.querySelector('.espanolMobile');

const  textsToChange = d.querySelectorAll("[data-section]");



const changeLanguage = async (language) =>{
    const requestJson = await fetch(`/languages/${language}.json`);
    const texts = await requestJson.json()
    for (const textToChange of textsToChange){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
       
        textToChange.innerHTML=texts[section][value];
    }
}


/* Ocultar iconos */
iconEn.style.display = 'none'; 

export default  toogleLanguage.addEventListener('click',(e)=>{
    changeLanguage(e.target.parentElement.dataset.language);
});

iconEn.addEventListener('click',()=>{
    iconEs.style.display = 'flex';
    iconEn.style.display = 'none';
});
iconEs.addEventListener('click',()=>{
    iconEn.style.display = 'flex';
    iconEs.style.display = 'none';
});

/* menu hamburguesa */
iconMobileEn.style.display = 'none'; 
toogleLanguageMobile.addEventListener('click',(e)=>{
    changeLanguage(e.target.parentElement.dataset.language);
});

iconMobileEn.addEventListener('click',()=>{
    iconMobileEs.style.display = 'flex';
    iconMobileEn.style.display = 'none';
});
iconMobileEs.addEventListener('click',()=>{
    iconMobileEn.style.display = 'flex';
    iconMobileEs.style.display = 'none';
});













