import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Registro } from '../components/Registro';
import { Login } from '../components/Login';
import { Home } from '../components/Home';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/registro" element={<Registro />} />
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};
