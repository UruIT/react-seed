import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../components/app/App';
import About from '../components/about/About';
import NotFound from '../components/notFound/NotFound';
import Dialog from '../components/info/Dialog';

import Nav from '../components/nav/Nav';

const Root = () => (
	<BrowserRouter>
		<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/about" component={About} />
				<Route path="/dialog" component={Dialog} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Root;
