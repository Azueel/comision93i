import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeroList } from '../components/HeroList';
import { HeroPage } from '../components/HeroPage';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HeroList publisher="Marvel Comics" />} />
				<Route path="/dc" element={<HeroList publisher="DC Comics" />} />
				<Route path="/futbol" element={<HeroList publisher="futbol" />} />
				<Route path="/heroe/:heroId" element={<HeroPage />} />
			</Routes>
		</BrowserRouter>
	);
};
