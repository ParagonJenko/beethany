import React from 'react';
import { Card, Image } from 'react-bootstrap';

function AboutCreator() {
	return (
		<Card>
			<Card.Body>
				<Image src='./beethany-cap.jpg' fluid />
				<Card.Title className='mt-3'>About Beethany</Card.Title>
				<Card.Text className='about-bee'>
					Beethany is a content creator with a passion for gaming, lifestyle
					vlogging, and engaging with her community. With a diverse range of
					content from gaming streams on Twitch to lifestyle videos on TikTok
					and YouTube, Beethany aims to create a welcoming and entertaining
					space for all.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default AboutCreator;
