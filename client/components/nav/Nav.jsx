import React from 'react';
import { NavLink } from 'react-router-dom';
import links from '../../routes/links';
import styles from './nav.scss';

const Nav = () => (
	<ul className={styles.nav}>
		<li>
			<NavLink to={links.index} className={styles.link} activeClassName={styles.active} exact>
				Home
			</NavLink>
		</li>
		<li>
			<NavLink to={links.about} className={styles.link} activeClassName={styles.active} exact>
				About
			</NavLink>
		</li>
	</ul>
);

export default Nav;
