import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.scss';
import { FormattedMessage } from 'react-intl';

let { nav, active } = styles;

const Nav = () =>
	<ul className={nav}>
		<li>
			<NavLink to="/" activeClassName={active} exact>
				<FormattedMessage id="home" defaultMessage="Home" />
			</NavLink>
		</li>
		<li>
			<NavLink to="/about" activeClassName={active} exact>
				<FormattedMessage id="about" defaultMessage="About" />
			</NavLink>
		</li>
	</ul>;

export default Nav;
