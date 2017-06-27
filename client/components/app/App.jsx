import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Counter from '../counter';
import styles from './App.scss';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { jokeFetchRequested } from './app.action';

const { container, shadow, button } = styles;

export function App({ joke, loading, error, fetchJoke }) {
	let text = (loading && 'loading...') || error || joke;

	return (
		<div className={`${container} ${shadow}`}>
			<Counter />
			<button className={`${button} ${shadow}`} onClick={fetchJoke}>
				<FormattedMessage id="test" defaultMessage="Test" />
			</button>
			<div>
				{ !!text && <Button text={text} /> }
			</div>
		</div>
	);
}

App.propTypes = {
	fetchJoke: PropTypes.func.isRequired,
	joke: PropTypes.string.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string.isRequired
};

const mapStateToProps = ({ app }) => app;
const mapDispatchToProps = dispatch => ({
	fetchJoke: () => dispatch(jokeFetchRequested())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
