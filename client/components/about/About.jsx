import React from 'react';
import Counter from '../counter';
import styles from './about.scss';

const About = () => (
	<div className={styles.about}>
		<h1>React Seed</h1>
		<h2>Simple project to start with React!</h2>
		<Counter />
	</div>
);

export default About;
