import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../components/App';
import About from '../components/about/About';

const Root = () => (
	<BrowserRouter>
		<div>
			<Route exact path='/' component={App} />
			<Route path='/about' component={About} />
		</div>
	</BrowserRouter>
);

export default Root;
