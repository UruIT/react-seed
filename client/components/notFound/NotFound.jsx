import React from 'react';
import { Link } from 'react-router-dom';
import styles from './not-found.scss';

const NotFound = () => (
	<div className={styles.container}>
		<h1>404</h1>
		<h2>Page Not Found</h2>
		<Link className={styles.link} to="/">
			Go Home!
		</Link>
	</div>
);

export default NotFound;
