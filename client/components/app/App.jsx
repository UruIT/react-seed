import React from 'react';
import MyButton from '../button/Button';
import { getJson } from 'utils/fetch';
import Counter from '../counter/Counter';
import styles from './app.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.state = {
			joke: ''
		};
	}

	handleClick() {
		return getJson('https://api.chucknorris.io/jokes/random').then(res =>
			this.setState({
				joke: res.value
			})
		);
	}

	render() {
		const { container, shadow, button } = styles;
		const { joke } = this.state;

		return (
			<div className={`${container} ${shadow}`}>
				<Counter />
				<button className={`${button} ${shadow}`} onClick={this.handleClick}>
					Test
				</button>
				{!!joke && <MyButton text={joke} />}
			</div>
		);
	}
}

export default App;
