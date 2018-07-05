import SortableList from './SortableList';
import { connect } from 'react-redux';
import { sortList, itemsFetchRequested } from './sortableList.actions';

const mapStateToProps = ({ sortable }) => sortable;

const mapDispatchToProps = {
	onSortEnd: sortList,
	fetchItems: itemsFetchRequested
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SortableList);
