import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withContext = (context = {}) => Wrapped => {
	class Wrapper extends Component {
		constructor(props) {
			super(props);
		}
		getChildContext() {
			return context;
		}
		render() {
			return <Wrapped {...this.props} />;
		}
	}

	let contextProps = Object.keys(context);
	Wrapper.childContextTypes = Object.assign(
		...contextProps.map(prop => ({ [prop]: PropTypes.any }))
	);

	return Wrapper;
};

export default withContext;
