import React, { Component } from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import Card from '../../card';
import PropTypes from 'prop-types';
import styles from './sortable-list.scss';

const ListItem = SortableElement(({ children }) => <div>{children}</div>);

const List = SortableContainer(({ items }) => {
	return (
		<ul>
			{items.map((item, index) => (
				<ListItem key={`item-${index}`} index={index}>
					<Card title={item.title} content={item.content} />
				</ListItem>
			))}
		</ul>
	);
});

class SortableList extends Component {
	constructor(props) {
		super(props);
		this.onSortEnd = this.onSortEnd.bind(this);
		this.state = {
			items: [
				{
					title: 'Item 1',
					content: 'Item number one'
				},
				{
					title: 'Item 2',
					content: 'Item number two'
				},
				{
					title: 'Item 3',
					content: 'Item number three'
				},
				{
					title: 'Item 4',
					content: 'Item number four'
				},
				{
					title: 'Item 5',
					content: 'Item number five'
				},
				{
					title: 'Item 6',
					content: 'Item number six'
				}
			]
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
				items={this.state.items}
				onSortEnd={this.onSortEnd}
				lockAxis={this.props.lockAxis}
				transitionDuration={this.props.transitionDuration}
				pressDelay={this.props.pressDelay}
				distance={this.props.distance}
				helperClass = {styles.helperClass}
			/>
		);
	}
}

SortableList.propTypes = {
	lockAxis: PropTypes.string,
	transitionDuration: PropTypes.number,
	pressDelay: PropTypes.number,
	distance: PropTypes.number
};

export default SortableList;
