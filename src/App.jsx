import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import AboutCreator from './components/AboutCreator';
import SocialMediaLinks from './components/SocialMediaLinks';

function App() {
	return (
		<>
			<Container>
				<Header />
			</Container>
			<hr />
			<Container>
				<Row>
					<Col md={6}>
						<AboutCreator />
					</Col>
					<Col md={6}>
						<SocialMediaLinks />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
