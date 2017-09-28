import React from 'react';
import { getJson } from 'utils/fetch';
import links from '../../routes/links';
import Clickable from '../clickable';
import Counter from '../counter';
import styles from './app.scss';
import classes from 'utils/classes';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.state = {
			joke: '',
			sample: [],
			error: ''
		};
	}

	componentDidMount() {
		getJson(links.api.sample)
			.then(sample => this.setState({ sample }))
			.catch(error => this.setState({ error }));
	}

	handleClick() {
		return getJson(links.chucknorris).then(response =>
			this.setState({
				joke: response.value
			})
		);
	}

	render() {
		const { joke, sample, error } = this.state;

		return (
			<div className={styles.container}>
				<Counter />
				<button className={classes(styles.button, styles.shadow)} onClick={this.handleClick}>
					click me
				</button>
				{!!joke && <Clickable content={joke} />}
				{this.renderApiTest(sample, error)}
			</div>
		);
	}

	renderApiTest(sample, error) {
		const response = JSON.stringify(sample.length ? sample : error);

		return (
			<Clickable
				content={
					<div className={styles.apiResponse}>
						<span>~{links.api.sample} response:</span>
						<div>{response}</div>
					</div>
				}
			/>
		);
	}
}

export default App;
