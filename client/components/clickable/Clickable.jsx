import React from 'react';
import PropTypes from 'prop-types';
import noop from 'utils/noop';
import styles from './clickable.scss';

const Clickable = ({ content, onClick }) => (
	<div className={styles.container} onClick={onClick}>
		{content}
	</div>
);

Clickable.propTypes = {
	content: PropTypes.node,
	onClick: PropTypes.func
};

Clickable.defaultProps = {
	content: '...',
	onClick: noop
};

export default Clickable;
