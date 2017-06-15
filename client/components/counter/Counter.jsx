import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { counterIncrement, counterDecrement } from './counter.action';
import styles from './Counter.scss';

export const Counter = ({ value, counterIncrement, counterDecrement }) => (
	<div className={styles.container}>
		<div>{ value }</div>
		<a onClick={counterDecrement}>-</a>
		<a onClick={counterIncrement}>+</a>
	</div>
);

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	counterIncrement: PropTypes.func.isRequired,
	counterDecrement: PropTypes.func.isRequired
};

const mapStateToProps = ({ counter }) => ({ value: counter });
const mapDispatchToProps = dispatch => ({
	counterIncrement: () => dispatch(counterIncrement()),
	counterDecrement: () => dispatch(counterDecrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
