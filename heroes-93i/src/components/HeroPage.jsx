import React from 'react';
import { useParams } from 'react-router-dom';
import { heroes } from '../data/heroesData';

export const HeroPage = () => {
	const heroe = useParams();

	const hero = heroes.find((hero) => hero.id === heroe.heroId);

	return (
		<div className="d-flex align-items-center m-3">
			<div style={{ flex: 1 }}>
				<img
					src={hero.imagen}
					alt={hero.superhero}
					style={{
						height: '800px',
						width: '500px',
						objectFit: 'cover',
						objectPosition: 'top',
					}}
				/>
			</div>

			<div style={{ flex: 2 }}>
				<h2>{hero.superhero}</h2>
				<p>
					<strong>Alter Ego:</strong> {hero.alter_ego}
				</p>
				<p>
					<strong>Primera Aparicion:</strong> {hero.first_appearance}
				</p>
				<p>
					<strong>Personaje:</strong> {hero.characters}
				</p>
				<p>
					<strong>Publicado:</strong> {hero.publisher}
				</p>
			</div>
		</div>
	);
};
