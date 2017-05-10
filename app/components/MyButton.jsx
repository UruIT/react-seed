import React from 'react';
import PropTypes from 'prop-types';

const MyButton = ({ children }) => (
	<div>
		<button className='button'>
			{ children || '...' }
		</button>
	</div>
);

MyButton.propTypes = {
	children: PropTypes.string
};

export default MyButton;
