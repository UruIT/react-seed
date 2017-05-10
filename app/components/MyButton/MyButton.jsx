import React from 'react';
import styles from './MyButton.scss';

export default class MyButton extends React.Component {

	render() {
		return (
			<div className={styles.container}>
				<button className='button'>My Button</button>
			</div>
		);
	}
}
