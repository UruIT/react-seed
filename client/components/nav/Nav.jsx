import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.scss';

const { nav, active, link } = styles;

const Nav = () => (
	<ul className={nav}>
		<li>
			<NavLink to="/" className={link} activeClassName={active} exact>
				Home
			</NavLink>
		</li>
		<li>
			<NavLink to="/about" className={link} activeClassName={active} exact>
				About
			</NavLink>
		</li>
	</ul>
);

export default Nav;
