import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import App from '../components/app';
import About from '../components/about/About';
import NotFound from '../components/notFound/NotFound';
import Sortable from '../components/sortable'
import Nav from '../components/nav/Nav';

const Root = ({ store }) => (
	<BrowserRouter>
		<Provider store={store}>
			<div>
				<Nav />
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/about" component={About} />
					<Route path="/sortable-list" component={Sortable} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Provider>
	</BrowserRouter>
);

Root.propTypes = {
	store: PropTypes.object.isRequired
};

export default Root;
