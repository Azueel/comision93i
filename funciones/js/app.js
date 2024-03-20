//function declartiva nos permite llamar a la funcion antes o despues de haber declarado la funcion
//creamos una funcion

function saludar() {
	console.log('Hola');
}
//llamamos a la funcion
saludar();

//funcion de expresion solamente nos permite llamar a la funcion despues de haberla declarado
const restar = function () {
	console.log(2 - 2);
};

restar();

//ejemplos parametro y argumento
//adentro de este parentesis el contenido se lo conoce como parametro
//los parametros estan encargados de almacenar los datos que enviaron
// function sumar(num1, num2) {
// 	console.log(num1 + num2);
// }

// //el contenido que este dentro de los parentesis de aca se lo conoce como argumento
// //el argumento esta encargado de mandarle datos a la funcion
// const num1 = parseInt(prompt('ingrese un numero'));
// const num2 = parseInt(prompt('ingrese un segundo numero'));

// sumar(num1, num2);

//ejemplo 2

// function datosUsuarios(nombre, edad, dni, direccion = '') {
// 	console.log(nombre, edad, dni, direccion);

// 	if (edad > 18) {
// 		console.log(`${nombre} es mayor de edad`);
// 	}
// }

// const nombreUsuario = prompt('Ingresa tu nombre');

// const edadUsuario = prompt('Ingresa tu edad');

// const dniUsuario = prompt('Ingresa tu dni');

// const direccionUsuario = prompt('Ingresa tu direccion');

// datosUsuarios(nombreUsuario, edadUsuario, dniUsuario, direccionUsuario);

//EJERCICIOS PARA PRACTICAR

//Tarea 1:
//DEBEN INGRESAR 2 VALORES POR PROMPT EL CUAL VAN A TENER UNA FUNCION QUE VA A HACER UNA MULTIPLICACION Y MOSTRAR EN CONSOLA EL RESULTADO

//TAREA 2:
//DEBEN INGRESAR POR PROMPT SU EDAD, SU NOMBRE Y SU COLOR FAVORITO, EL COLOR ES OPCIONAL, ENTONCES TENER UN VALOR POR DEFECTO SI NO INGRESA NADA EL USUARIO

//TAREA 3:
//PEDIRLE AL USUARIO QUE INGRESE SU NOMBRE, CONTRASEÑA, CONFIRMAR CONTRASEÑA Y EN LA FUNCION VALIDAR ESOS DATOS, VALIDAR QUE LOS CAMPOS NO ESTEN VACIO EN CASO DE UNO ESTAR VACIO MOSTRARLE EN CONSOLA QUE TODOS LOS CAMPOS SON OBLIGATORIOS, VALIDAR QUE LA CONTRASEÑA SEA MAYOR A 5 CARACTERES Y VALIDAR QUE LA CONTRASEÑA Y CONFIRMAR CONTRASEÑA SEAN IGUALES EN CASO CONTRARIO MOSTRARLE AL USUARIO EL ERROR

const nombreRegistro = prompt('Ingrese su nombre');

const passwordRegistro = prompt('Ingrese su contraseña');

const confirmarPasswordRegistro = prompt('Ingrese nuevamente su contraseña');

const usuariosRegistrados = ['juanito', 'martina', 'pepito'];

function validarRegistro(nombre, password, confirmPassword) {
	if (nombre == '' || password == '' || confirmPassword == '') {
		console.log('Todos los campos son obligatorios');
		return;
	} else if (password.length < 5) {
		console.log('La contraseña debe ser mayor a 5');
		return;
	} else if (password !== confirmPassword) {
		console.log('Las contraseñas deben ser iguales');
		return;
	}

	console.log('usuario registrado');
	usuariosRegistrados.push(nombre);
}

validarRegistro(nombreRegistro, passwordRegistro, confirmarPasswordRegistro);
