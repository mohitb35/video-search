import React from 'react';

import './VideoItem.css';

const VideoItem = ({ video }) => {
	console.log(video);

	return <div className="item video-item">
		<div className="image">
			<img src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
		</div>
		<div className="middle aligned content">
			<div className="header">{video.snippet.title}</div>
		</div>
	</div>
}

export default VideoItem;
