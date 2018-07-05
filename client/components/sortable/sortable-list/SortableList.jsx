import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from './list';
import styles from './sortable-list.scss';
//TODO
/* Transform in class the component and use the ComponentDidMount lifecycle to load the items from the DB */
class SortableList extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchItems();
	}
	render() {
		const {
			enableDragHandle,
			items,
			onSortEnd,
			lockAxis,
			transitionDuration,
			pressDelay,
			distance,
			error,
			loading
		} = this.props;
		return (
			<div>
				{!!error && <p className="Error"> {error} </p>}
				{loading && <p className="Loading"> loading </p>}
				<List
					enableDragHandle={enableDragHandle}
					items={items}
					useDragHandle={enableDragHandle}
					onSortEnd={onSortEnd}
					lockAxis={lockAxis}
					transitionDuration={transitionDuration}
					pressDelay={pressDelay}
					distance={distance}
					helperClass={styles.helperClass}
				/>
			</div>
		);
	}
}

SortableList.propTypes = {
	lockAxis: PropTypes.string,
	transitionDuration: PropTypes.number,
	pressDelay: PropTypes.number,
	distance: PropTypes.number,
	enableDragHandle: PropTypes.bool,
	items: PropTypes.array,
	onSortEnd: PropTypes.func,
	fetchItems: PropTypes.func,
	error: PropTypes.string,
	loading: PropTypes.bool
};

SortableList.defaultProps = {
	lockAxis: '',
	transitionDuration: 100,
	pressDelay: 0,
	distance: 0,
	enableDragHandle: false
};

export default SortableList;
