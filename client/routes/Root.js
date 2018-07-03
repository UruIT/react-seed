import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../components/app';
import About from '../components/about';
import NotFound from '../components/not-found';
import Nav from '../components/nav/Nav';
import Sortable from '../components/sortable';

import links from './links';

const Root = () => (
	<BrowserRouter>
		<div>
			<Nav />
			<Switch>
				<Route exact path={links.index} component={App} />
				<Route path={links.sortableList} component={Sortable} />
				<Route path={links.about} component={About} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Root;
