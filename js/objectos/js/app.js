const persona = {
	//key :  value
	nombre: 'pepito',
	edad: 22,
	pais: 'Argentina',

	comer() {
		console.log('Comiendo');
	},
};

//forma de acceder a un elemento del objeto "nombre de la variable" "." "key"
console.log(persona.comer());

const alumno = {
	nombre: 'olivia',
	apellido: 'Fernandez',
	curso: 'tercer año',
	materias: ['matematica', 'lengua', 'fisica', 'quimica'],
	tamaño: {
		peso: 68,
		altura: '178cm',
	},
	suspendido: false,
};

console.log(alumno.materias[1]);

//creamos una nueva propiedad
alumno.abanderado = true;

//modificamos una propiedad existente
alumno.curso = 'Cuarto año';

//eliminamos una propiedad
delete alumno.suspendido;

console.log(alumno);

//arreglos de objeto
const mercaderia = [
	{ nombre: 'Fideos', precio: 1400, cantidad: 2 },
	{ nombre: 'Arroz', precio: 1500, cantidad: 3 },
];

console.log(mercaderia);
