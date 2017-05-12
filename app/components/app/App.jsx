import React from 'react';
import MyButton from '../button/Button';
import { getJson } from '../../utils/fetch';
import Counter from '../counter/Counter';
import styles from './App.scss';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			joke: ''
		};
	}
	handleClick = () => {
		return getJson('https://api.chucknorris.io/jokes/random')
			.then(res => this.setState({
				joke: res.value
			}));
	}
	render() {
		let { container, shadow, button } = styles;
		let { joke } = this.state;

		return (
			<div className={`${container} ${shadow}`}>
				<Counter />
				<button className={`${button} ${shadow}`} onClick={this.handleClick}>Test</button>
				{ !!joke && <MyButton text={joke} /> }
			</div>
		);
	}

	test = () => {
		console.error('test')
	}
}
