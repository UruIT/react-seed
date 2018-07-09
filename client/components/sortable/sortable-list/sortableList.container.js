import SortableList from './SortableList';
import { connect } from 'react-redux';
import { sortListRequested, itemsFetchRequested } from './sortableList.actions';

const mapStateToProps = ({ sortable }) => sortable;

const mapDispatchToProps = {
	onSortEnd: sortListRequested,
	fetchItems: itemsFetchRequested
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SortableList);
