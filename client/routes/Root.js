import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../components/app/App';
import About from '../components/about/About';
import NotFound from '../components/notFound/NotFound';
import Nav from '../components/nav/Nav';

import links from './links';

const Root = () => (
	<BrowserRouter>
		<div>
			<Nav />
			<Switch>
				<Route exact path={links.index} component={App} />
				<Route path={links.about} component={About} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Root;
