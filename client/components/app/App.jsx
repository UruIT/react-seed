import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Counter from '../counter';
import styles from './App.scss';

const { container, shadow, button } = styles;

const App = ({ samples, loading, error, fetchSamples }) => {
	const text = (loading && 'loading...') || error;

	return (
		<div className={`${container} ${shadow}`}>
			<Counter />
			<button className={`${button} ${shadow}`} onClick={fetchSamples}>
				Test
			</button>
			<div>
				{!!text && <Button text={text} />}
				{!text &&
					samples.map(s =>
						<div key={s.id}>
							<Button text={s.description} />
						</div>
					)}
			</div>
		</div>
	);
}

App.propTypes = {
	fetchSamples: PropTypes.func.isRequired,
	samples: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string.isRequired
};

export default App;
