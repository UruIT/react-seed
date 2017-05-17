import React from 'react';
import PropTypes from 'prop-types';
import styles from './MyButton.scss';

const log = e => alert(e.target.textContent);

const MyButton = ({ children }) => (
	<div className={styles.container}>
		<button className='button' onClick={log}>
			{ children || '...' }
		</button>
	</div>
);

MyButton.propTypes = {
	children: PropTypes.string
};

export default MyButton;
