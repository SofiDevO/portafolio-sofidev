/* Boton "To top" */
const d =document;
const cajaToTop = d.querySelector(".to__top")

/* Dar click en en la caja del btn "toTop*/
cajaToTop.addEventListener("click", ()=>{
	window.location.href ="#"
})


export  const toTop = d.querySelector(".to__top") 
window.addEventListener("scroll",()=>{
	if(window.pageYOffset > 500){
		toTop.classList.add("active");
	}else{
		toTop.classList.remove("active");
	}
})