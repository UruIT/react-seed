import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyButton.scss';

const MyButton = ({ children }) => (
	<div className={styles.container}>
		<button className='button'>
			{ children || '...' }
		</button>
	</div>
);

MyButton.propTypes = {
	children: PropTypes.string
};

export default MyButton;
