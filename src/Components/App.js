import React from 'react';

/* Create a config.js file within the src folder. Return KEY as part of the exported config object. */
import config from '../config';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';


class App extends React.Component {
	state = {
		videos: [],
		selectedVideo: null
	}

	onSearchSubmit = async (term) => {
		try {
			const results = await youtube.get('/search', {
				params: {
					key: config.KEY,
					part: 'snippet',
					q: term,
					maxResults: 10,
					type: 'video'
				}
			});

			this.setState({
				videos: results.data.items
			});
		} catch(error) {
			console.log(error);
		}
	}

	onVideoSelect = (video) => {
		this.setState({
			selectedVideo: video
		});
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmit={this.onSearchSubmit}/> 
				<p>{this.state.videos.length} videos found.</p>
				<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
			</div>
		)
	}
} 

export default App;