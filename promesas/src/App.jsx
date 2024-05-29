import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function App() {
	const [personajes, setPersonajes] = useState([]);

	const conectarApi = async () => {
		try {
			const respuesta = await axios.get('https://www.freetogame.com/api/games');
			setPersonajes(respuesta.data);
		} catch (error) {
			console.log(error);
		}
	};

	conectarApi();

	return (
		<>
			<div className="d-flex justify-content-around flex-wrap m-5">
				{personajes.map((juego) => (
					<Card style={{ width: '18rem' }} className="m-4">
						<Card.Img variant="top" src={juego.thumbnail} />
						<Card.Body>
							<Card.Title>{juego.title}</Card.Title>
							<Card.Text>{juego.short_description}</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				))}
			</div>
		</>
	);
}

export default App;
