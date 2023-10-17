export default function CardsPortafolio(){
    const portafolioData = [
        {
            imgSrc: "./assets/img/PortfolioImg/sass_portada.png",
            imgAlt: "portada, ecostore",
            titulo: "Eco Store",
            skills: ["Sass", "JavaScript"],
            descripcion: "Made with sass for the,Sass fundamentals course",
            demoURL: "https://sofidevo.github.io/eco-store-sass/",
            repoURL: "https://github.com/SofiDevO/eco-store-sass"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/portada_react_org.png",
            imgAlt: "portada, encriptador de mensajes",
            titulo: "React ORG",
            skills: ["React", "JavaScript"],
            descripcion: "React application to manage your team members.",
            demoURL: "https://react-org-delta.vercel.app/",
            repoURL: "https://github.com/SofiDevO/react-org"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/encriptador_mensajes_dark.png",
            imgAlt: "portada, encriptador de mensajes",
            titulo: "Message Encryptor",
            skills: ["JavaScript"],
            descripcion: "Message Encryptor for the first Alura Latam Challenge: Programming Logic.",
            demoURL: "https://sofidevo.github.io/encriptador-mensajes/",
            repoURL: "https://github.com/SofiDevO/encriptador-mensajes"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/portada_portafolio.png",
            imgAlt: "portada, encriptador de mensajes",
            titulo: "My Portfolio",
            skills: ["JavaScript"],
            descripcion: "Just the repository of my portfolio on GitHub.",
            demoURL: "./index.html",
            repoURL: "https://github.com/SofiDevO/portafolio-sofidev"
        }
    ];
    
    const skillIcons = {
        React: '<i class="fa-brands fa-react fa-beat-fade" style="color: #6beeff;"></i>',
        JavaScript: '<i class="fa-brands fa-square-js fa-beat-fade" style="color: #ffdb29; font-size: 2rem;"></i>',
        Sass: '<i class="fa-brands fa-sass fa-beat-fade" style="color: #ff00ea;font-size: 2rem;"></i>'
    };
    
    const portafolioContainer = document.querySelector('[data-card]');
    
    for (const data of portafolioData) {
        const cardHTML = `
            <div class="portafolio__trajeta swiper-slide ">
                <div class="portafolio__cara faceA card__content ">
                    <div class="img__container">
                        <img class="portafolio__img ${data.skills.includes("JavaScript") ? 'ligth__img' : ''}" 
                            src="${data.imgSrc}" alt="${data.imgAlt}">
                    </div>
                    <div class="container__info">
                        <h3 class="portafolio__subtitulo titulo__dark">${data.titulo}</h3>
                        <div class="skills__used">
                            ${data.skills.map(skill => `
                                <div class="tecnology">
                                    ${skillIcons[skill] || ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="portafolio__cara faceB  caja__dark__portafolio">
                    <p class="portafolio__descripcion titulo__dark">${data.descripcion}</p>
                    <div class="portafolio__botobnes">
                        <a href="${data.demoURL}"target="_blank" rel="nofollow noreferrer noopener">
                            <button class="portafolio__btn boton titulo__dark">
                                <span data-section="portafolio" data-value="demo">View Demo</span>
                            </button>
                        </a>
                        <a href="${data.repoURL}"target="_blank" rel="nofollow noreferrer noopener">
                            <button class="portafolio__btn boton titulo__dark">
                                <span data-section="portafolio" data-value="repo">View Repo</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
        `;
    
        portafolioContainer.insertAdjacentHTML('beforeend', cardHTML);
    }
    
}
