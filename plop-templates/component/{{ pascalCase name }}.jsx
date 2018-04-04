import React from 'react';
import PropTypes from 'prop-types';
import styles from './{{ dashCase name }}.scss';

class {{ pascalCase name }} extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				{{ name }} component template...
			</div>
		);
	}
}

{{ pascalCase name }}.propTypes = {

};

export default {{ pascalCase name }};
