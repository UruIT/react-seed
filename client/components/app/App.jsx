import React from 'react';
import { getJson } from '../../utils/fetch';
import links from '../../routes/links';
import Clickable from '../clickable';
import styles from './app.scss';
import classes from '../../utils/classes';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.state = {
			jokes: [],
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
				jokes: [response.value, ...this.state.jokes]
			})
		);
	}

	render() {
		const { jokes, sample, error } = this.state;
		const jsxJokes = jokes.map((joke, idx) => <Clickable key={idx} content={joke} />);

		return (
			<div className={styles.container}>
				<button className={classes(styles.button, styles.shadow)} onClick={this.handleClick}>
					+
				</button>
				<div className={styles.jokes}>{jsxJokes}</div>
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
