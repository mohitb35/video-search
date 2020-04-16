import React from 'react';

const VideoDetail = ({ video }) => {
	if(video) {
		const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

		return (
			<div>
				<div className="ui embed">
					<iframe src={videoSrc} title={video.snippet.title}></iframe>
				</div>
				<div className="ui segment">
					<h4 className="ui header">{video.snippet.title}</h4>
					<p>{video.snippet.description}</p>
				</div>
			</div>
		);
	}
	
	return (
		<div className="ui segment">
			<h4 className="ui header">What are you waiting for? Start searching!</h4>
		</div>
	);
}

export default VideoDetail;