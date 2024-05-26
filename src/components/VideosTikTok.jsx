import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TikTokVideos = () => {
	const [videos, setVideos] = useState([]);
	const accessToken = import.meta.env.VITE_APP_TIKTOK_ACCESS_TOKEN;

	if (import.meta.env.VITE_TIKTOK_FLAG === 'false') {
		return;
	}
	useEffect(() => {
		const fetchVideos = async () => {
			const headers = {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			};

			try {
				const response = await axios.get(
					'https://open-api.tiktok.com/video/list',
					{
						headers,
						params: {
							open_id: import.meta.env.VITE_APP_TIKTOK_OPEN_ID,
							access_token: accessToken, // redundant, included in headers, but some APIs require both
						},
					}
				);
				setVideos(response.data.data);
			} catch (error) {
				console.error('Error fetching data from TikTok API', error);
			}
		};

		fetchVideos();
	}, [accessToken]);

	return (
		<Container fluid>
			<Row className='tiktok-bg m-3 p-3 rounded'>
				{videos.map((video) => (
					<Col sm={12} md={6} lg={4} xl={3} key={video.id}>
						<Card className='mb-4'>
							<Card.Body>
								<video width='100%' controls>
									<source src={video.video_url} type='video/mp4' />
									Your browser does not support the video tag.
								</video>
								<Card.Text>{video.desc}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default TikTokVideos;
