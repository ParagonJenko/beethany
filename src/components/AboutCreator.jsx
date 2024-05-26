import React from 'react';
import { Card, Image, Col, Row } from 'react-bootstrap';
import './SocialMediaLinks';
import SocialMediaLinks from './SocialMediaLinks';

function AboutCreator() {
	return (
		<Card className='my-2'>
			<Card.Body>
				<Card.Title>About Beethany</Card.Title>
				<Row>
					<Col md={3}>
						<Image src='./beethany-cap.jpg' fluid />
					</Col>
					<Col md={9}>
						<Card.Text className='about-bee'>
							Beethany is a content creator with a passion for gaming, lifestyle
							vlogging, and engaging with her community. With a diverse range of
							content from gaming streams on Twitch to lifestyle videos on
							TikTok and YouTube, Beethany aims to create a welcoming and
							entertaining space for all.
							<SocialMediaLinks />
						</Card.Text>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}

export default AboutCreator;
