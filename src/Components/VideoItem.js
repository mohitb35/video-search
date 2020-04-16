import React from 'react';

const VideoItem = ({ video }) => {
	console.log(video);

	return <div>
		<img src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
		{video.snippet.title}
	</div>
}

export default VideoItem;
