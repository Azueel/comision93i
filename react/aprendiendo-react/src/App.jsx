function App() {
	const alumnos = [
		{ nombre: 'pepito', edad: 13, curso: 'segundo' },
		{ nombre: 'juanita', edad: 16, curso: 'cuarto' },
		{ nombre: 'juanito', edad: 12, curso: 'primero' },
	];

	return (
		<>
			{alumnos.map(function (alumno) {
				return (
					<div>
						<h1>{alumno.nombre}</h1>
						<strong>{alumno.edad}</strong>
						<p>Esta cursando {alumno.curso}</p>
					</div>
				);
			})}
		</>
	);
}

export default App;
