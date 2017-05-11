import React from 'react';
import MyButton from './MyButton/MyButton';
import { getJson } from '../utils/fetch';
import Counter from './counter/Counter';
import styles from './App.scss';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			joke: ''
		};
	}
	handleClick = () => {
		getJson('https://api.chucknorris.io/jokes/random')
			.then(res => this.setState({
				joke: res.value
			}));
	}
	render() {
		return (
			<div className={styles.container}>
				<Counter />
				<button className={styles.button} onClick={this.handleClick}>Test</button>
				<MyButton>{ this.state.joke }</MyButton>
			</div>
		);
	}

	test = () => {
		console.error('test')
	}
}
