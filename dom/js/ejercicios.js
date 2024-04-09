function cambiarColor() {
	//guardamos la etiqueta body en este caso en una variable
	const fondoColor = document.querySelector('#color');

	//ClassList se encarga de ver todas las clases que dispone nuestra etiqueta seleccionada
	console.log(fondoColor.classList);

	//CONTAINS ES UN METODO que nos pide que ingreses un nombre y va a evaluar si se encuentra en las class retornarndo true o false
	console.log(fondoColor.classList.contains('dark'));

	if (fondoColor.classList.contains('light')) {
		fondoColor.classList.add('dark');
		fondoColor.classList.remove('light');
	} else {
		fondoColor.classList.add('light');
		fondoColor.classList.remove('dark');
	}
}

function sumar() {
	//.value nos devuelve el valor que se encuentra en la etiqueta
	const num1 = parseInt(document.querySelector('#num1').value);
	const num2 = parseInt(document.querySelector('#num2').value);
	const resultado = document.querySelector('#resultado');
	const resultadoOperacion = num1 + num2;

	//textContent lo que hace es agregar el texto en la etiqueta que le asignamos
	resultado.textContent = resultadoOperacion;
}

function restar() {
	const num1 = parseInt(document.querySelector('#num1').value);
	const num2 = parseInt(document.querySelector('#num2').value);
	const resultado = document.querySelector('#resultado');
	const resultadoOperacion = num1 - num2;

	resultado.textContent = resultadoOperacion;
}

//Ejercicio 3
function publicar() {
	const textoUsuario = document.querySelector('#textoUsuario').value;
	const publicaciones = document.querySelector('#publicaciones');

	//createElement nos permite crear etiquetas HTML
	const nuevaPublicacion = document.createElement('p');
	//a la etiqueta que creamos le ponemos como contenido lo que escribio el usuario
	nuevaPublicacion.textContent = textoUsuario;

	//agregamos la etiqueta que creamos adentro del div para que se pueda visualizar
	publicaciones.appendChild(nuevaPublicacion);
}
