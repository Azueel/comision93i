const validarRegistro = document.querySelector('#validarRegistro');

validarRegistro.addEventListener('submit', validarUsuario);

const usuarioRegistrados = JSON.parse(localStorage.getItem('registrados')) || [];

class Usuario {
	constructor(id, nombre, email, password) {
		this.id = id;
		this.nombre = nombre;
		this.email = email;
		this.password = password;
	}
}

function validarUsuario(e) {
	e.preventDefault();

	//primer paso obtener los valores de los input
	const id = Date.now();
	const nombre = document.querySelector('#nombre').value;
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
	const confirmPassword = document.querySelector('#confirmPassword').value;

	const validarEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const resultadoValdacion = validarEmail.test(email);

	//segundo paso hacer todas las validaciones
	//validar que los campos no esten vacios, que el email sea valido, verificar que el correo no este  registrado, que la contraseña sea mayor a cierta cantidad de caracteres y que sean iguales la contraseña y confirmar contraseña
	if (!resultadoValdacion) {
		console.log('No es un correo valido');
	}

	//validar si el correo no existe en la lista
	const comprobandoEmail = usuarioRegistrados.find(function (usuario) {
		return email === usuario.email;
	});

	//verificamos si el correo ya existe
	if (comprobandoEmail !== undefined) {
		return console.log('Este correo ya esta registrado');
	}

	//creamos el objeto
	const nuevoUsuario = new Usuario(id, nombre, email, password);
	//lo guardamos en la lista
	usuarioRegistrados.push(nuevoUsuario);

	//lo guardamos en el localStorage
	localStorage.setItem('registrados', JSON.stringify(usuarioRegistrados));
}
