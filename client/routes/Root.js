import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../components/app/App';
import About from '../components/about/About';
import Report from '../components/report/Report';
import NotFound from '../components/notFound/NotFound';

import Nav from '../components/nav/Nav';

const Root = () => (
	<BrowserRouter>
		<div>
			<Nav />
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/about" component={About} />
				<Route path="/report" component={Report} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default Root;
