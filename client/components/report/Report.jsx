import React from 'react';
import style from './Report.scss';

const Report = () =>
	<form action="api/report" className={style.report}>
		<h3> Click below to generate a pdf report using wkhtmltopdf </h3>
		<input type="submit" value="Download pdf" />
	</form>

export default Report;
