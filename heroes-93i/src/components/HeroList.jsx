import React from 'react';
import { heroes } from '../data/heroesData';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { HeroCard } from './HeroCard';

export const HeroList = (props) => {
	const mostrarHeroes = heroes.filter((hero) => hero.publisher === props.publisher);

	return (
		<div>
			<Row xs={1} md={2} lg={4} className="m-3">
				{mostrarHeroes.map((hero) => {
					return (
						<Col key={hero.id}>
							<HeroCard hero={hero} />
						</Col>
					);
				})}
			</Row>
		</div>
	);
};
