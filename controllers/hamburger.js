/* Menu hamburguesa */
const d = document;



export default function hamburgerMenu(panelBtn, panel, menuLink, menuAvatar) {

    d.addEventListener("click", (e) => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        };

        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        };
    })
}
d.addEventListener("DOMContentLoaded", (e)=> {
    hamburgerMenu(".panel__btn", ".panel", ".menu__link", ".menu__avatar");
})