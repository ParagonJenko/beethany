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

const CombinedVideos = () => {
	const [videos, setVideos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchVideos = async () => {
			setLoading(true);
			setError(null);
			const tikTokAccessToken = import.meta.env.VITE_APP_TIKTOK_ACCESS_TOKEN;
			const youTubeApiKey = import.meta.env.VITE_APP_YOUTUBE_API_KEY;
			const youTubeChannelId = import.meta.env.VITE_APP_YOUTUBE_CHANNEL_ID;

			try {
				const sources = [];
				if (import.meta.env.VITE_TIKTOK_FLAG !== 'false') {
					const tikTokVideos = await axios.get(
						'https://open-api.tiktok.com/video/list',
						{
							headers: {
								Authorization: `Bearer ${tikTokAccessToken}`,
								'Content-Type': 'application/json',
							},
							params: {
								open_id: import.meta.env.VITE_APP_TIKTOK_OPEN_ID,
								access_token: tikTokAccessToken,
							},
						}
					);
					sources.push(
						...tikTokVideos.data.data.map((video) => ({
							id: video.id,
							url: video.video_url,
							title: video.desc,
							platform: 'TikTok',
							createdAt: new Date(video.create_time * 1000), // Assuming create_time is in seconds
						}))
					);
				}

				if (import.meta.env.VITE_YOUTUBE_FLAG !== 'false') {
					const youtubeVideos = await axios.get(
						`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${youTubeChannelId}&type=video&key=${youTubeApiKey}&maxResults=20&order=date`
					);
					sources.push(
						...youtubeVideos.data.items.map((video) => ({
							id: video.id.videoId,
							url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
							title: video.snippet.title,
							thumbnail: video.snippet.thumbnails.medium.url,
							platform: 'YouTube',
							createdAt: new Date(video.snippet.publishTime),
						}))
					);
				}

				// Sort by createdAt date
				sources.sort((a, b) => b.createdAt - a.createdAt);
				setVideos(sources);
			} catch (err) {
				console.log(err);
				if (err.request.status === 403) return;
				console.error('Error fetching data', err);
				setError('Failed to fetch videos');
			} finally {
				setLoading(false);
			}
		};

		fetchVideos();
	}, []);

	if (loading) return <div>Loading...</div>;

	if (error) return <div>Error: {error}</div>;

	return (
		<Container fluid>
			<Row className='rounded videos-background p-4 m-1'>
				<h2 className='text-center text-white mb-2'>My Content</h2>
				<hr />
				{videos.map((video) => (
					<Col sm={12} md={6} lg={4} xl={3} key={video.id}>
						<Card className='mb-3'>
							{video.platform === 'TikTok' ? (
								<Card.Body>
									<video width='100%' controls>
										<source src={video.url} type='video/mp4' />
										Your browser does not support the video tag.
									</video>
									<Card.Text>{video.title}</Card.Text>
								</Card.Body>
							) : (
								<OverlayTrigger
									placement='top'
									overlay={<Tooltip id={`tooltip-top`}>{video.title}</Tooltip>}
								>
									<a href={video.url} target='_blank' rel='noopener noreferrer'>
										<Card.Img
											variant='top'
											src={video.thumbnail}
											alt={video.title}
										/>
									</a>
								</OverlayTrigger>
							)}
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default CombinedVideos;
