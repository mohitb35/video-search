import React from 'react';

import './VideoItem.css';

/* class VideoItem extends React.Component {
	render(props) {
		return <div className="item video-item" onClick={props.onVideoSelect}>
			<div className="image">
				<img src={props.video.snippet.thumbnails.default.url} alt={props.video.snippet.description}/>
			</div>
			<div className="middle aligned content">
				<div className="header">{props.video.snippet.title}</div>
			</div>
		</div>
	}
} */


const VideoItem = ({ video, onVideoSelect }) => {
	console.log(video);

	return <div className="item video-item" onClick={ () => onVideoSelect(video) }>
		<div className="image">
			<img src={video.snippet.thumbnails.default.url} alt={video.snippet.description}/>
		</div>
		<div className="middle aligned content">
			<div className="header">{video.snippet.title}</div>
		</div>
	</div>
}

export default VideoItem;
