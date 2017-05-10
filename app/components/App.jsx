import React from 'react';
import MyButton from './MyButton';
import styles from './App.scss';
import { getJson } from '../utils/fetch';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			joke: ''
		};
	}
	componentDidMount() {
		getJson('https://api.chucknorris.io/jokes/random')
			.then(res => this.setState({
				joke: res.value
			}));
	}
	render() {
		return (
			<div>
				<button className={styles.button} onClick={this.test}>Test</button>
				<MyButton>{ this.state.joke }</MyButton>
			</div>
		);
	}

	test = () => {
		console.error('test')
	}
}
