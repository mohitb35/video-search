import React from 'react';

import SearchBar from './SearchBar';

import youtube from '../apis/youtube';
import config from '../config';

class App extends React.Component {

	onSearchSubmit(term) {
		console.log(term);
		youtube.get('/search', {
			params: {
				key: config.KEY,
				part: 'snippet',
				q: term,
				maxResults: 10,
				type: 'video'
			}
		})
		.then(results => {
			console.log(results.data.items);
		})
		;
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmit={this.onSearchSubmit}/> 
			</div>
		)
	}
} 

export default App;