import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.scss';

const show = e => alert(e.target.textContent);

const Button = ({ text, onClick }) => (
	<div className={styles.container} onClick={onClick}>
		{ text }
	</div>
);

Button.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string
};
Button.defaultProps = {
	onClick: show,
	text: '...'
};

export default Button;
