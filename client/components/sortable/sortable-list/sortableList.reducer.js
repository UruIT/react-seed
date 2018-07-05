import { SORT_LIST, ITEMS_FETCH_REQUESTED, ITEMS_FETCH_SUCCEEDED, ITEMS_FETCH_FAILED } from './sortableList.actions';
import { arrayMove } from 'react-sortable-hoc';
import items from './items';
const DEFAULT_STATE = { items };
export const sortableReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SORT_LIST:
			return {
				...state,
				items: arrayMove(state.items, action.payload.oldIndex, action.payload.newIndex)
			};
		case ITEMS_FETCH_REQUESTED:
			return {
				...state,
				loading: true,
				error: ''
			};
		case ITEMS_FETCH_SUCCEEDED:
			return {
				items: action.items,
				loading: false,
				error: ''
			};
		case ITEMS_FETCH_FAILED:
			return {
				...DEFAULT_STATE,
				error: action.message
			};
		default:
			return state;
	}
};
