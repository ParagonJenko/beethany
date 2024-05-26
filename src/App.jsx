import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import AboutCreator from './components/AboutCreator';
import SocialMediaLinks from './components/SocialMediaLinks';
import YouTubeVideos from './components/VideosYouTube';
import TikTokVideos from './components/VideosTikTok';
import CombinedVideos from './components/CombinedVideos';

function App() {
	return (
		<>
			<Container fluid>
				<Row>
					<Col md={6}>
						<Header />
					</Col>
					<Col md={6}>
						<AboutCreator />
					</Col>
				</Row>
			</Container>
			<CombinedVideos />
			<hr />
		</>
	);
}

export default App;
