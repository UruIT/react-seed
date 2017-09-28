import React from 'react';
import PropTypes from 'prop-types';
import styles from './clickable.scss';

const dialog = e => alert(e.target.textContent);

const Clickable = ({ text, onClick }) => (
	<div className={styles.container} onClick={onClick}>
		{ text }
	</div>
);

Clickable.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string
};

Clickable.defaultProps = {
	onClick: dialog,
	text: '...'
};

export default Clickable;
