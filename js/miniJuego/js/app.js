const opcionJugador = prompt("escribe su seleccion: 'piedra','papel,'tijera'");

let resultadoIA;

function opcionMaquina() {
	const seleccionIA = Math.floor(Math.random() * 3);

	switch (seleccionIA) {
		case 0:
			resultadoIA = 'piedra';
			break;

		case 1:
			resultadoIA = 'papel';
			break;

		case 2:
			resultadoIA = 'tijera';
			break;
	}

	calcularResultado(opcionJugador, resultadoIA);
}

opcionMaquina();

function calcularResultado(opcionJugador, opcionMaquina) {
	if (opcionJugador === opcionMaquina) {
		console.log('Empate');
	} else if (opcionJugador === 'piedra' && opcionMaquina === 'papel') {
		console.log('Perdimos');
	} else if (opcionJugador === 'piedra' && opcionMaquina === 'tijera') {
		console.log('Ganaste');
	} else if (opcionJugador === 'papel' && opcionMaquina === 'tijera') {
		console.log('Perdiste');
	} else if (opcionJugador === 'papel' && opcionMaquina === 'piedra') {
		console.log('Ganamos');
	} else if (opcionJugador === 'tijera' && opcionMaquina === 'piedra') {
		console.log('perdimos');
	} else if (opcionJugador === 'tijera' && opcionMaquina === 'papel') {
		console.log('ganamos');
	}
}
