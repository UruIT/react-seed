import React from 'react';
import { NavLink } from 'react-router-dom';
import { nav, active, normal } from './Nav.scss';

const Nav = () => (
	<ul className={nav}>
		<li>
			<NavLink to='/' activeClassName={active} className={normal} exact>
				Home
			</NavLink>
		</li>
		<li>
			<NavLink to='/about' activeClassName={active} className={normal} exact>
				About
			</NavLink>
		</li>
	</ul>
);

export default Nav;
