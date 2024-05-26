import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Container,
	Row,
	Col,
	Card,
	OverlayTrigger,
	Tooltip,
} from 'react-bootstrap';

const YouTubeVideos = () => {
	const [videos, setVideos] = useState([]);
	const apiKey = import.meta.env.VITE_APP_YOUTUBE_API_KEY;
	const channelId = import.meta.env.VITE_APP_YOUTUBE_CHANNEL_ID;

	if (import.meta.env.VITE_YOUTUBE_FLAG === 'false') {
		return;
	}

	useEffect(() => {
		const fetchVideos = async () => {
			try {
				const response = await axios.get(
					`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&key=${apiKey}&maxResults=20&order=date`
				);
				setVideos(response.data.items);
			} catch (error) {
				console.error('Error fetching data from YouTube API', error);
			}
		};

		fetchVideos();
	}, [apiKey, channelId]);

	return (
		<Container fluid>
			<Row className='youtube-bg m-3 p-3 rounded'>
				{videos.map((video) => (
					<Col sm={6} md={4} lg={3} xl={2} key={video.id.videoId}>
						<OverlayTrigger
							placement='top'
							overlay={
								<Tooltip id={`tooltip-top`}>{video.snippet.title}</Tooltip>
							}
						>
							<Card className='mb-4 youtube-bg'>
								<a
									href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
									target='_blank'
									rel='noopener noreferrer'
								>
									<Card.Img
										variant='top'
										src={video.snippet.thumbnails.medium.url}
										alt={video.snippet.title}
									/>
								</a>
							</Card>
						</OverlayTrigger>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default YouTubeVideos;
