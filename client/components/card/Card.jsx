import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.scss';

const Card = props => (
	<div className={styles.card}>
		<h4>{props.title}</h4>
		<p>{props.content}</p>
	</div>
);

Card.propTypes = {
	content: PropTypes.string,
	title: PropTypes.string
};

Card.defaultProps = {
	content: 'Card content',
	title: 'Card title'
};

export default Card;
