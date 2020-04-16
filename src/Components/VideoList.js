import React from 'react';

import VideoItem from './VideoItem';

/* function createList(videoArray) {
	return videoArray.map(video => {
		return <VideoItem key={video.id.videoId} video={video} onVideoClick={this.props.onVideoClick}/>
	});
}; */

const VideoList = ({ videos, onVideoSelect }) => {
	const videoList = videos.map(video => {
		return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
	});

	return (
		<div className="ui relaxed divided list">
			{videoList}
		</div>
	)
}

export default VideoList;