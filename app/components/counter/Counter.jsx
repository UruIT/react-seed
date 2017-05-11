import React, { Component } from 'react';
import styles from './Counter.scss';

const increment = step => ({ value }) => ({ value: value + step });

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}
	handleIncClick = e => {
		e.preventDefault();
		this.setState(increment(1));
	}
	handleDecClick = e => {
		e.preventDefault();
		this.setState(increment(-1));
	}
	render() {
		return (
			<div className={styles.container} >
				<div>{ this.state.value }</div>
				<button onClick={this.handleDecClick}>&#x2212;</button>
				<button onClick={this.handleIncClick}>&#x2b;</button>
			</div>
		);
	}
}

export default Counter;
