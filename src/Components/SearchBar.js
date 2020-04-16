import React from 'react';

class SearchBar extends React.Component {
	state = {
		term: ''
	};

	onInputChange = (event) => {
		this.setState({
			term: event.target.value
		});
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		console.log(this.state.term);
		// call form submit callback method passed from App
		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Video Search</label>
						<input 
							type="text" placeholder="Search for a Youtube video.."
							value={this.state.term}
							onChange={this.onInputChange} 
						/>
					</div>
				</form>
			</div>
		)
	}
} 

export default SearchBar;