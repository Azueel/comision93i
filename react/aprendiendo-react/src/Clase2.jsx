import React, { useState } from 'react';
import { NavbarPage } from './components/Navbar';

export const Clase2 = () => {
	//aca vamos a escribir la logica
	// const nombre = 'pepito';
	// const nombreEmpresa = 'Rolling';

	const [contador, setContador] = useState(10);
	const [error, setError] = useState('');

	const restar = () => {
		if (contador == 0) {
			return setError('no puede bajar de 0');
		}
		setContador(contador - 1);
		setError('');
	};

	const sumar = () => {
		setContador(contador + 1);
		setError('');
	};

	const reset = () => {
		setContador(10);
		setError('');
	};
	return (
		<>
			<NavbarPage />

			<p className="fs-1 text-center mt-5 bg-danger text-dark">{error}</p>
			<h2 className="fs-1 text-center mt-5">{contador}</h2>
			<div className="d-flex justify-content-center mt-3">
				<button className="btn btn-dark p-3 me-3" onClick={restar}>
					-1
				</button>
				<button className="btn btn-dark p-3 " onClick={reset}>
					Reset
				</button>
				<button className="btn btn-dark p-3 ms-3" onClick={sumar}>
					+1
				</button>
			</div>
		</>
	);
};
