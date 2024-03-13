let num = 101;

//while si o si debe cumplir la condicion para mostrar el cuerpo del bucle
while (num < 100) {
	console.log(num);
	//MUY IMPORTANTE NO OLVIDARSE EL INCREMENTADOR O DECREMENTADOR
	num++;
}

//doWhile
//dowhile se ejecuta al menos una vez y despues evualua la condicion, en caso de no cumplirse para la ejecucion sino sigue ejecutandose
let num2 = 100;
do {
	console.log(num2);
	num2++;
} while (num2 < 50);

//Ciclo For
for (let x = 0; x < 100; x++) {
	if (x % 2 == 0) {
		console.log(`El numero ${x} es par`);
	} else {
		console.log(`El numero ${x} es impar`);
	}
}

//vamos a evular 150 numeros si el numero es multiplo de 3 mostrar en consola FIZZ, si es multiplo de 5 mostrar Buzz y si es multiplo de ambos mostrar FIZZBUZZ
for (let y = 1; y <= 150; y++) {
	if (y % 15 == 0) {
		console.log(`${y} FizzBuzz`);
	} else if (y % 3 == 0) {
		console.log(`${y} Fizz`);
	} else if (y % 5 == 0) {
		console.log(`${y} Buzz`);
	}
}
