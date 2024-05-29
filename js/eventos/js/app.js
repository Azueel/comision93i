// const button = document.querySelector('#evento');

// button.addEventListener('click', mensaje);

// function mensaje() {
// 	console.log('Hola clickeaste el boton');
// }

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarCampos);

function validarCampos(e) {
	//preventDefault previene el refresh de la pagina en los formularios
	e.preventDefault();

	const nombre = document.querySelector('#nombre').value;
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
	const confirmPassword = document.querySelector('#confirmPassword').value;

	if (nombre === '' || email === '' || password === '' || confirmPassword === '') {
		return console.log('todos los campos son obligatorios');
	} else if (password.length < 6) {
		return console.log('la contraseña debe ser mayor a 6 caracteres');
	} else if (password !== confirmPassword) {
		return console.log('Las contraseñas deben ser iguales');
	}

	console.log('Fecilicidades ya estas registrado');
}
