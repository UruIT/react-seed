import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Counter.scss';
import * as CounterActions from './CounterActions';

const mapStateToProps = ({ value }) => ({
	value
});

export const Counter = ({ value, counterIncrement, counterDecrement }) => (
	<div className={styles.container} >
		<div>{ value }</div>
		<a onClick={counterDecrement}>&#x2212;</a>
		<a onClick={counterIncrement}>&#x2b;</a>
	</div>
);

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	counterIncrement: PropTypes.func.isRequired,
	counterDecrement: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps,
	CounterActions
)(Counter);
