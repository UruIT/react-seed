import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import App from '../components/App';
import About from '../components/about/About';
import NotFound from '../components/notFound/NotFound';

const Root = () => (
	<BrowserRouter>
		<div>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/about'>About</Link></li>
			</ul>

			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/about' component={About} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Root;
