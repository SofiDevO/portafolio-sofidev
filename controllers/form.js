const d = document;
const inputs = d.querySelectorAll("[data-type]");
const mensajes = d.querySelectorAll("[data-span]");
const loader = d.querySelector(".contact_form_loader");
const response = d.querySelector(".contact__div__form__response");
const form = d.querySelector(".formulario__contacto");


export default inputs.forEach((input) => {
	function mostrarError() {
		mensajes.forEach((mensaje) => {
			if (input.value === "") {
				mensaje.classList.remove("none");
			} else {
				mensaje.classList.add("none");
			}
		});
	}
	input.addEventListener("blur", (input) => {
		mostrarError();
	});
});

function contactFormValidation() {
	const $form = d.querySelector(".formulario__contacto"),
		$inputs = d.querySelectorAll(".formulario__contacto [required]");

	$inputs.forEach((input) => {
		const $span = d.createElement("span");
		$span.id = input.name;
		$span.textContent = input.title;
		$span.classList.add("contact-form-error", "none");
		input.insertAdjacentElement("afterend", $span);
	});
	d.addEventListener("keyup", (e) => {
		if (e.target.matches(".formulario__contacto [required]")) {
			let $input = e.target,
				pattern = $input.pattern || $input.dataset.pattern;

			
			if (pattern) {
				let regex = new RegExp(pattern);
				return !regex.exec($input.value)
					? d.getElementById($input.name).classList.add("is-active")
					: d.getElementById($input.name).classList.remove("is-active");
			}
		}
	});
}
d.addEventListener("submit", (e) => {
    contactFormValidation();
    loader.classList.remove("none");
    setTimeout(() => {
        loader.classList.add("none");
        response.classList.remove("none");
        form.reset();
    }, 800);
});