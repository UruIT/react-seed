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

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState({
			items: arrayMove(this.state.items, oldIndex, newIndex)
		});
	};

	render() {
		return (
			<List
				enableDragHandle={this.props.enableDragHandle}
				items={this.state.items}
				useDragHandle={this.props.enableDragHandle}
				onSortEnd={this.onSortEnd}
				lockAxis={this.props.lockAxis}
				transitionDuration={this.props.transitionDuration}
				pressDelay={this.props.pressDelay}
				distance={this.props.distance}
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
