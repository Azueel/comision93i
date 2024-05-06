// // //un Array es una lista Ordenada, Los array aceptan cualquier tipo de dato string,number,boolean,otros array y otros mas
// const num = [1, 2, 3, 4, 5, 6];

// // const bool = [true, false];

// // const mix = ['Hola', 12, false, ['a', 2]];
// // console.log(mix[3][1]);

// // const alumnos = ['pepito', 'martina', 'juanito'];
// // console.log(alumnos[0]);

// // //.push() agrega un elemento a la lista al final
// // alumnos.push('camila');
// // console.log(alumnos);

// // //.unshift() agrega un elemento a la lista al Inicio
// // alumnos.unshift('tiago');
// // console.log(alumnos);

// // //.sort() ordena alfabeticamente de la A-Z
// // console.log(alumnos.sort());

// // //.reverse() ordena alfabeticamente de la Z-A
// // console.log(alumnos.reverse());

// // //.includes() busca en el arreglo el elemento que le hayamos definido en caso de encontrarlo nos devuelve TRUE si no False
// // console.log(alumnos.includes('aslkdoak'));

// // //.pop() nos permite eliminar el ultimo elemento del arreglo
// // console.log(alumnos.pop());

// // //de esta forma podemos cambiar el valor de un elemento del arreglo
// // alumnos[1] = 'pipon';

// // console.log(alumnos);

// //ejercicios practica

// const meses = [
// 	'enero',
// 	'febrero',
// 	'marzo',
// 	'abril',
// 	'mayo',
// 	'junio',
// 	'julio',
// 	'agosto',
// 	'septiembre',
// 	'octubre',
// 	'noviembre',
// 	'diciembre',
// ];

// for (let i = 0; i < meses.length; i++) {
// 	console.log(meses[i]);
// }

// //ejercicio 1
// //invertir un arreglo [1,2,3,4] tiene que quedar [4,3,2,1] y mostrar en pantalla los numeros utilizando un bucle (utilizar .reverse())
// const arregleInvertido = [1, 2, 3, 4];
// arregleInvertido.reverse();

// for (let i = 0; i < arregleInvertido.length; i++) {
// 	console.log(arregleInvertido[i]);
// }

// //ejercicio 2
// //identificar los numeros y tener un contador que incrementa por cada par que vea [1,2,3,4,5,6,7,8]
// const pares = [1, 2, 3, 4, 5, 6, 7, 8];
// let contadorPares = 0;

// for (let i = 0; i < pares.length; i++) {
// 	if (pares[i] % 2 == 0) {
// 		contadorPares++;
// 	}
// }

// console.log(contadorPares);

// //van a tener un bucle donde van a pasar todos los numeros

// //van a tener una condicion donde van a evaluar si es par, y si es par el numero que pasa incrementar el contador

// //ejercicio 3
// //van a tener un arreglo de numeros [1,2,3,4,5,6,7,8] y cada numero que pase tiene que sumarse van tener una variable total que sea igual a 0 y cuando pase por ejemeplo el 1 sumarlo al 0 cuando pase el 2 sumarle al total previo

// const numeroAcumulados = [1, 2, 3, 4, 5, 6, 7, 8];

// let total = 0;

// for (let i = 0; i < numeroAcumulados.length; i++) {
// 	total = total + numeroAcumulados[i];
// }

// console.log(total);

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosFiltrados = numero.filter(function (num) {
	return num % 2 === 0;
});

console.log(numerosFiltrados);

//con map
const paresMap = [1, 2, 3, 4, 5, 6, 7, 8];
const paresFiltrados = paresMap.map(function (par) {
	if (par % 2 === 0) {
		console.log(par);
	}
});
//map con objetos
const productos = [
	{
		nombre: 'TV',
		precio: 500000,
	},
	{
		nombre: 'Heladera',
		precio: 700000,
	},
];

const productosIterados = productos.map(function (producto) {
	console.log(
		`El nombre del producto es ${producto.nombre} y su valor es de ${producto.precio}`
	);
});

//hola
