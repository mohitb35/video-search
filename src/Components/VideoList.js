import React from 'react';

import VideoItem from './VideoItem';

function createList(videoArray) {
	return videoArray.map(video => {
		return <VideoItem key={video.id.videoId} video={video} />
	});
};

const VideoList = (props) => {
	return (
		<div className="ui relaxed divided list">
			{createList(props.videos)}
		</div>
	)
}

export default VideoList;