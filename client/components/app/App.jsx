import React from 'react';
import { getJson } from 'utils/fetch';
import links from '../../routes/links';
import Counter from '../counter/Counter';
import MyButton from '../button/Button';
import styles from './app.scss';
import classes from 'utils/classes';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.state = {
			joke: ''
		};
	}

	handleClick() {
		return getJson(links.chucknorris).then(res =>
			this.setState({
				joke: res.value
			})
		);
	}

	render() {
		const { joke } = this.state;

		return (
			<div className={styles.container}>
				<Counter />
				<button className={classes(styles.button, styles.shadow)} onClick={this.handleClick}>
					Test
				</button>
				{!!joke && <MyButton text={joke} />}
			</div>
		);
	}
}

export default App;
