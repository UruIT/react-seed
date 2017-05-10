import React from 'react';
import MyButton from './MyButton';
import styles from './App.scss';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
				<button className={styles.button} onClick={this.test}>Test</button>
				<MyButton></MyButton>
			</div>
		);
	}

	test = () => {
		console.error('test')
	}
}
