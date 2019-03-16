import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from '../components/not-found';
import Nav from '../components/nav/Nav';

import links from './links';

const App = lazy(() => import('../components/app'));
const About = lazy(() => import('../components/about'));

const Root = () => (
	<BrowserRouter>
		<div>
			<Nav />
			<Suspense fallback={'Loading...'}>
				<Switch>
					<Route exact path={links.index} component={App} />
					<Route path={links.about} component={About} />
					<Route component={NotFound} />
				</Switch>
			</Suspense>
		</div>
	</BrowserRouter>
);

export default Root;
