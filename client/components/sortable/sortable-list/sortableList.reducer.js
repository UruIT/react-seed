import {
	SORT_LIST_REQUESTED,
	SORT_LIST_SUCCEEDED,
	SORT_LIST_FAILED,
	ITEMS_FETCH_REQUESTED,
	ITEMS_FETCH_SUCCEEDED,
	ITEMS_FETCH_FAILED
} from './sortableList.actions';

const DEFAULT_STATE = { items: [] };

export const sortableReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SORT_LIST_REQUESTED:
			return {
				...state,
				loading: true,
				error: ''
			};
		case SORT_LIST_SUCCEEDED:
			return {
				items: action.items,
				loading: false,
				error: ''
			};
		case SORT_LIST_FAILED:
			return {
				...state,
				loading: false,
				error: action.message
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
