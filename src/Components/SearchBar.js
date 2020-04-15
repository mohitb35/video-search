import React from 'react';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input 
							type="text" placeholder="Search for a Youtube video.." 
						/>
					</div>
				</form>
			</div>
		)
	}
} 

export default SearchBar;