import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import {
	FaTwitch,
	FaTiktok,
	FaInstagram,
	FaTwitter,
	FaYoutube,
	FaCrown,
} from 'react-icons/fa';

function SocialMediaLinks() {
	return (
		<Row className='my-4 justify-content-center'>
			<Col xs='auto'>
				<ButtonGroup className='w-100'>
					<Button
						className='twitch'
						variant='primary'
						href='https://www.twitch.tv/beethany'
					>
						<FaTwitch /> Twitch
					</Button>
					<Button
						className='tiktok'
						variant='primary'
						href='https://www.tiktok.com/@beethanytv'
					>
						<FaTiktok /> TikTok
					</Button>
					<Button
						className='youtube'
						variant='primary'
						href='https://youtube.com/beethany'
					>
						<FaYoutube /> YouTube
					</Button>
					<Button
						className='instagram'
						variant='primary'
						href='https://www.instagram.com/beethanytv'
					>
						<FaInstagram /> Instagram
					</Button>
					<Button
						className='twitter'
						variant='primary'
						href='https://twitter.com/Beethanytv'
					>
						<FaTwitter /> Twitter
					</Button>
					<Button
						className='throne'
						variant='primary'
						href='https://throne.com/beethany'
					>
						<FaCrown /> Throne
					</Button>
				</ButtonGroup>
			</Col>
		</Row>
	);
}

export default SocialMediaLinks;
