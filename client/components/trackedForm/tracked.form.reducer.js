import { FORM_SUBMIT } from './tracked.form.action';

const DEFAULT_STATE = {
	tax: 15,
	fee: 0.5
}

export const formReducer = ( state = DEFAULT_STATE, action ) => {
	switch (action.type) {
		case FORM_SUBMIT:
			return {
				...state,
				tax: action.tax,
				fee: action.fee
			};
		default:
			return state;
	}
};
