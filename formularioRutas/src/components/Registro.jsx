import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Registro = () => {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		//validaciones
		if (nombre === '' || email === '' || password === '' || passwordConfirm === '') {
			return console.log('Todos los campos son obligatorios');
		} else if (password !== passwordConfirm) {
			return console.log('Las contraseñas deben ser iguales');
		}
	};

	return (
		<div>
			<h1 className="ms-5 py-3">Registro</h1>
			<Form className="w-50 px-5" onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Nombre</Form.Label>
					<Form.Control type="text" onChange={(e) => setNombre(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Correo Electronico</Form.Label>
					<Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Contraseña </Form.Label>
					<Form.Control
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Confirmar Contraseña</Form.Label>
					<Form.Control
						type="password"
						onChange={(e) => setPasswordConfirm(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Registrarse
				</Button>
			</Form>
		</div>
	);
};
