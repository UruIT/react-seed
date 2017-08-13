import React from 'react';
import { getJson } from '../../utils/fetch';
import Counter from '../counter/Counter';
import styles from './App.scss';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			samples: []
		};
	}
	handleClick = () => {
		return getJson('/api/sample').then(res =>
			this.setState({
				samples: res
			})
		);
	};
	render() {
		let { container, shadow, button, sample } = styles;
		let { samples } = this.state;

		return (
			<div className={`${container} ${shadow}`}>
				<Counter />
				<button className={`${button} ${shadow}`} onClick={this.handleClick}>
					Test
				</button>
				{!!samples &&
					samples.map(s =>
						<div className={sample} key={s.id}>
							{s.description}
						</div>
					)}
			</div>
		);
	}

	test = () => {
		console.error('test');
	};
}
