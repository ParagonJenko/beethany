import React from 'react';

function Header() {
	return (
		<div className='embed-responsive embed-responsive-16by9 mt-2'>
			<iframe
				src='https://player.twitch.tv/?channel=beethany'
				height='480'
				width='100%'
				allowFullScreen={true}
				className='embed-responsive-item'
			></iframe>
		</div>
	);
}

export default Header;
