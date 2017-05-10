import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from '../components/App';
import About from '../components/about/About';

const Root = () => (
	<BrowserRouter>
		<div>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/about'>About</Link></li>
			</ul>

			<Route exact path='/' component={App} />
			<Route path='/about' component={About} />
		</div>
	</BrowserRouter>
);

export default Root;
