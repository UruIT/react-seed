import React from 'react';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<button onClick={this.test}>Test</button>
			</div>
		);
	}

	test = () => {
		console.error('test')
	}
}
