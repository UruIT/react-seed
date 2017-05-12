import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const log = e => console.warn(e.target.textContent);

const Button = ({ text, onClick }) => (
	<div className={styles.container} onClick={onClick} >
		{ text }
	</div>
);

Button.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string
};
Button.defaultProps = {
	onClick: log,
	text: '...'
}

export default Button;
