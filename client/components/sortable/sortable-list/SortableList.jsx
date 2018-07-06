import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { arrayMove } from 'react-sortable-hoc';

import List from './list';
import styles from './sortable-list.scss';
import items from './items';

class SortableList extends Component {
	constructor(props) {
		super(props);
		this.onSortEnd = this.onSortEnd.bind(this);
		this.state = {
			items
		};
	}

	onSortEnd({ oldIndex, newIndex }) {
		this.setState({
			items: arrayMove(this.state.items, oldIndex, newIndex)
		});
	}

	render() {
		const { enableDragHandle, lockAxis, transitionDuration, pressDelay, distance } = this.props;
		const { items } = this.state;
		return (
			<List
				enableDragHandle={enableDragHandle}
				items={items}
				useDragHandle={enableDragHandle}
				onSortEnd={this.onSortEnd}
				lockAxis={lockAxis}
				transitionDuration={transitionDuration}
				pressDelay={pressDelay}
				distance={distance}
				helperClass={styles.helperClass}
			/>
		);
	}
}

SortableList.propTypes = {
	lockAxis: PropTypes.string,
	transitionDuration: PropTypes.number,
	pressDelay: PropTypes.number,
	distance: PropTypes.number,
	enableDragHandle: PropTypes.bool
};

SortableList.defaultProps = {
	lockAxis: '',
	transitionDuration: 100,
	pressDelay: 0,
	distance: 0,
	enableDragHandle: false
};

export default SortableList;
