import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.scss';

let { nav, active } = styles;

const Nav = () => (
	<ul className={nav}>
		<li>
			<NavLink to="/" activeClassName={active} exact>
				Home
			</NavLink>
		</li>
		<li>
			<NavLink to="/about" activeClassName={active} exact>
				About
			</NavLink>
		</li>
		<li>
			<NavLink to="/graphic" activeClassName={active} exact>
				Graphics
			</NavLink>
		</li>
	</ul>
);

export default Nav;
