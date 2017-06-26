import React from 'react';
import style from './About.scss';
import { FormattedMessage, FormattedTime, FormattedNumber, FormattedDate } from 'react-intl';

const About = () => (
	<div className={style.about}>
		<h1><FormattedMessage id="about" defaultMessage="About" /></h1>
		<h3> Time: <FormattedTime value={new Date(1498592585905)} /></h3>
		<h3> Date: <FormattedDate value={new Date(1459832991883)} /></h3>
		<h3> Number: <FormattedNumber value={1000.5} /></h3>
	</div>
);

export default About;
