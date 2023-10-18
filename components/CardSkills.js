const d = document;
export default function generarCards() {
// Definir un objeto con los datos de las cards
const cardsData = [
    {
        imgSrc: "./assets/svg/file-type-html.svg",
        imgAlt: "HTML icon",
        title: "HTML<br>✅",
        class: "html"
    },
    {
        imgSrc: "./assets/svg/css-color.svg",
        imgAlt: "CSS icon",
        title: "CSS<br>✅",
        class: "css"
    },
    {
        imgSrc: "./assets/svg/sass.svg",
        imgAlt: "Sass icon",
        title: "Sass<br>✅",
        class: ""
    },
    {
        imgSrc: "./assets/svg/styledcomponents.svg",
        imgAlt: "Styled components icon",
        title: "Styled<br>Components<br>✅",
        class: ""
    },
    {
        imgSrc: "./assets/svg/javascript-fill.svg",
        imgAlt: "Javascript icon",
        title: "Javascript<br>✅",
        class: "javascript"
    },
    {
        imgSrc: "./assets/svg/react-dark.svg",
        imgAlt: "React icon",
        title: "React<br>✅",
        class: "React"
    },
    {
        imgSrc: "./assets/svg/astro.svg",
        imgAlt: "Astro icon",
        title: "Astro<br>✅",
        class: ""
    },
    {
        imgSrc: "./assets/svg/wordpress-icon.svg",
        imgAlt: "Wordpress icon",
        title: "Wordpress<br>✅",
        class: "wordpress"
    },
    {
        imgSrc: "./assets/svg/nodejs-dark.svg",
        imgAlt: "Node.js icon",
        title: "Node.js<br>🌱",
        class: ""
    },
    {
        imgSrc: "./assets/svg/npm-wordmark.svg",
        imgAlt: "Wordpress icon",
        title: "npm<br>✅",
        class: "npm"
    },
    {
        imgSrc: "./assets/svg/mysql.svg",
        imgAlt: "MySql icon",
        title: "MySql<br> Server<br>🌱",
        class: ""
    },
    
];

// Obtener el contenedor de las cards
const cardsContainer = d.querySelector('.skills__cajas');

// Crear las cards dinámicamente utilizando template strings
for (const data of cardsData) {
    const cardHTML = `
        <div class="skills__caja caja__dark">
            <div class="img">
                <img class="skills__icono skills__icono__dark
                ${data.class}"
                src="${data.imgSrc}"
                alt="${data.imgAlt}">
            </div>
            <div class="skills__texto">
                <p class="text head titulo__dark">
                    ${data.title}
                </p>
            </div>
        </div>
    `;

    // Agregar la card al contenedor
    cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
}
}


generarCards();