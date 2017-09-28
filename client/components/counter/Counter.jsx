import React, { Component } from 'react';
import styles from './counter.scss';

const leap = step => ({ value }) => ({ value: value + step });

class Counter extends Component {
	constructor(props) {
		super(props);

		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
		this.state = { value: 0 };
	}

	handleIncrement() {
		this.setState(leap(1));
	}

	handleDecrement() {
		this.setState(leap(-1));
	}

	render() {
		return (
			<div className={styles.container}>
				<div>{this.state.value}</div>
				<a onClick={this.handleDecrement}>−</a>
				<a onClick={this.handleIncrement}>+</a>
			</div>
		);
	}
}

export default Counter;
