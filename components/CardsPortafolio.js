export default function CardsPortafolio(){
    const portafolioData = [
        {
            imgSrc: "https://github.com/SofiDevO/alura-flix/raw/sofidev/image-1.png",
            titulo: "Alura Flix",
            skills: ["React", "styledComponents"],
            descripcion: "Final project for the One Oracle Next Education Program. Educational programming video website demonstrating CRUD requests.",
            demoURL: "https://alura-flix-self.vercel.app/",
            repoURL: "https://github.com/SofiDevO/alura-flix"
        },
        {
            imgSrc: "https://user-images.githubusercontent.com/102200061/276017828-4983348b-bdc7-40ff-af28-0765d45a387a.png",
            titulo: "React ORG",
            skills: ["React"],
            descripcion: "React application to manage your team members.",
            demoURL: "https://react-org-delta.vercel.app/",
            repoURL: "https://github.com/SofiDevO/react-org"
        },
        {
            imgSrc: "https://github.com/SofiDevO/alura-geek/raw/sofidev/image-1.png",
            titulo: "Alura Geek",
            skills: ["JavaScript"],
            descripcion: " CRUD operations using HTTP requests.",
            demoURL: "https://alura-geek-ruddy.vercel.app/",
            repoURL: "https://github.com/SofiDevO/react-org"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/sass_portada.png",
            titulo: "Eco Store",
            skills: ["Sass", "JavaScript"],
            descripcion: "Made with sass for the,Sass fundamentals course",
            demoURL: "https://sofidevo.github.io/eco-store-sass/",
            repoURL: "https://github.com/SofiDevO/eco-store-sass"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/portada_portafolio.png",
            titulo: "My Portfolio",
            skills: ["JavaScript"],
            descripcion: "Just the repository of my portfolio on GitHub.",
            demoURL: "./index.html",
            repoURL: "https://github.com/SofiDevO/portafolio-sofidev"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/encriptador_mensajes_dark.png",
            titulo: "Message Encryptor",
            skills: ["JavaScript"],
            descripcion: "Message Encryptor for the first Alura Latam Challenge: Programming Logic.",
            demoURL: "https://sofidevo.github.io/encriptador-mensajes/",
            repoURL: "https://github.com/SofiDevO/encriptador-mensajes"
        },
    ];
    
    const skillIcons = {
        React: '<i class="fa-brands fa-react fa-beat-fade" style="color: #6beeff;"></i>',
        JavaScript: '<i class="fa-brands fa-square-js fa-beat-fade" style="color: #ffdb29; font-size: 2rem;"></i>',
        Sass: '<i class="fa-brands fa-sass fa-beat-fade" style="color: #ff00ea;font-size: 2rem;"></i>',
        styledComponents: '<iconify-icon icon="skill-icons:styledcomponents" width="26"></iconify-icon>'
    };
    
    const portafolioContainer = document.querySelector('[data-card]');
    
    for (const data of portafolioData) {
        const cardHTML = `
        
            <div class="portafolio__tarjeta">
            
                <div class="portafolio__cara faceA card__content caja__dark__portafolio ">
                
                    <div class="img__container">
                        <img class="portafolio__img ${data.skills.includes("JavaScript") ? 'ligth__img' : ''}" 
                            src="${data.imgSrc}" alt="${data.title}">
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
                        <a class="portafolio__btn boton titulo__dark" href="${data.demoURL}"target="_blank" rel="nofollow noreferrer noopener">
                                <span data-section="portafolio" data-value="demo">View Demo</span>
                        </a>
                        <a class="portafolio__btn boton titulo__dark" href="${data.repoURL}"target="_blank" rel="nofollow noreferrer noopener">
                                <span data-section="portafolio" data-value="repo">View Repo</span>
                        </a>
                    </div>
                </div>
            </div>
            
        `;
    
        portafolioContainer.insertAdjacentHTML('beforeend', cardHTML);
    }
    
}
