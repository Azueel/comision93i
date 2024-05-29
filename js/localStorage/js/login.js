const validarUsuario = document.querySelector('#validarLogin');

validarUsuario.addEventListener('submit', validarLogin);

const usuarios = JSON.parse(localStorage.getItem('registrados'));

function validarLogin(e) {
	e.preventDefault();

	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;

	//validaciones
	//checkear que los campos no esten vacios, que sea un email valido

	const comprobandoEmail = usuarios.find(function (usuario) {
		return email === usuario.email;
	});

	if (comprobandoEmail !== undefined) {
		if (comprobandoEmail.password === password) {
			console.log('Login Correcto');
		} else {
			console.log('El correo o la contraseña es incorrecta');
		}
	} else {
		console.log('El correo o la contraseña es incorrecta');
	}
}
