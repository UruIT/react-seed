import React from 'react';
import PropTypes from 'prop-types';
import styles from './clickable.scss';

const dialog = e => alert(e.target.textContent);

const Clickable = ({ content, onClick }) => (
	<div className={styles.container} onClick={onClick}>
		{ content }
	</div>
);

Clickable.propTypes = {
	content: PropTypes.node,
	onClick: PropTypes.func
};

Clickable.defaultProps = {
	content: '...',
	onClick: dialog
};

export default Clickable;
