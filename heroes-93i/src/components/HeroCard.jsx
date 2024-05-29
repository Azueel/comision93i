import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HeroCard = ({ hero }) => {
	return (
		<Card style={{ width: '18rem' }} className="m-3">
			<Card.Img
				variant="top"
				src={hero.imagen}
				style={{
					height: '300px',
					objectFit: 'cover',
					objectPosition: 'top',
				}}
			/>
			<Card.Body>
				<Card.Title>{hero.superhero}</Card.Title>
				<Link to={`/heroe/${hero.id}`} className="btn btn-primary">
					Ver Mas
				</Link>
			</Card.Body>
		</Card>
	);
};
