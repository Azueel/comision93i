// class Persona {
// 	constructor(nombre, apellido, edad, pais) {
// 		this.nombre = nombre;
// 		this.apellido = apellido;
// 		this.edad = edad;
// 		this.pais = pais;
// 	}

// 	mostrarInfo() {
// 		console.log(
// 			`Tu nombre completo es ${this.nombre} ${this.apellido} tu edad es de ${this.edad} y tu pais residente es ${this.pais}`
// 		);
// 	}
// }

// const usuario = new Persona('pepito', 'castro', 33, 'argentina');

// console.log(usuario.mostrarInfo());

//Ejercicio Cajero
//Escribe un programa que cree un objeto CUENTA con las siguientes propiedades:
//una propieda titular con el valor "Alex"
//una propiedad saldo, teniendo como valor inical 0
//un metodo ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parametro
//un metodo extraer() que permita retirar la cantidad pasada como parametro
//un metodo consultar() que retorne la informacion del estado de la cuenta

class Cuenta {
	constructor(nombre) {
		this.nombre = nombre;
		this.saldo = 0;
	}

	ingresar(monto) {
		this.saldo = this.saldo + monto;
	}

	extraer(monto) {
		if (this.saldo >= monto) {
			this.saldo = this.saldo - monto;
		} else {
			console.log('Saldo Insuficiente');
		}
	}

	consultar() {
		console.log(`Tu saldo actual es de ${this.saldo}`);
	}
}

const usuarioBanco = new Cuenta('fer');

usuarioBanco.ingresar(300);
usuarioBanco.ingresar(100);
usuarioBanco.extraer(300);

console.log(usuarioBanco.consultar());

// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo , peso , altura y  año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.

class Persona {
	constructor(nombre, edad, dni, sexo, peso, altura, fechaNacimiento) {
		this.nombre = nombre;
		this.edad = edad;
		this.dni = dni;
		this.sexo = sexo;
		this.peso = peso;
		this.altura = altura;
		this.fechaNacimiento = fechaNacimiento;
	}

	mostrarGeneraciones() {
		if (this.fechaNacimiento >= 1930 && this.fechaNacimiento <= 1948) {
			console.log('Sos de la generacion silent Generation');
		} else if (this.fechaNacimiento >= 1949 && this.fechaNacimiento <= 1968) {
			console.log('Sos de la generacion Baby boom');
		} else if (this.fechaNacimiento >= 1969 && this.fechaNacimiento <= 1980) {
			console.log('Sos de la generacion X');
		} else if (this.fechaNacimiento >= 1981 && this.fechaNacimiento <= 1993) {
			console.log('Sos de la generacion Y');
		} else if (this.fechaNacimiento >= 1994 && this.fechaNacimiento <= 2010) {
			console.log('Sos de la generacion Z');
		} else {
			console.log('Tu Año de nacimiento aun no tiene una generacion definida');
		}
	}

	esMayorEdad() {
		if (this.edad >= 18) {
			console.log('Usted es mayor de edad');
		} else {
			console.log('Sos menor de edad');
		}
	}

	mostrarDatos() {
		console.log(
			`Nombre: ${this.nombre}, Edad: ${this.edad}, Dni: ${this.dni}, Sexo: ${this.sexo}, Peso: ${this.peso}, Altura: ${this.altura}, Nacimiento: ${this.fechaNacimiento}`
		);
	}
}

const usuarioGenracion = new Persona(
	'Alejo',
	25,
	2223232,
	'Masculino',
	'179cm',
	'80',
	1999
);

usuarioGenracion.mostrarGeneraciones();
usuarioGenracion.esMayorEdad();
usuarioGenracion.mostrarDatos();
