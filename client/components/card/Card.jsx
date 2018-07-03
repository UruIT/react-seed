import React from 'react';
import PropTypes from 'prop-types';

import DragHandle from '../sortable/sortable-list/drag-handle';
import styles from './card.scss';

const Card = props => (
	<div className={styles.card}>
		{props.enableDragHandle && (
			<div className={styles.handleContainer}>
				<DragHandle />
			</div>
		)}
		<div className={styles.cardInfo}>
			<h4>{props.title}</h4>
			<p>{props.content}</p>
		</div>
	</div>
);

Card.propTypes = {
	content: PropTypes.string,
	title: PropTypes.string,
	enableDragHandle: PropTypes.bool
};

Card.defaultProps = {
	content: 'Card content',
	title: 'Card title',
	enableDragHandle: false
};

export default Card;
