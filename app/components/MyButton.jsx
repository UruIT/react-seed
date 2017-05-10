import React from 'react';

const MyButton = ({ children }) => (
	<div>
		<button className='button'>
			{ children || '...' }
		</button>
	</div>
);

export default MyButton;
