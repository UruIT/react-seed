import { EventTypes } from 'redux-segment';

export const FORM_SUBMIT = 'FORM_SUBMIT';

export const submitTrackedForm = (tax, fee) => ({
	type: FORM_SUBMIT,
	tax: parseFloat(tax),
	fee: parseFloat(fee),
	meta: {
		analytics: {
			eventType: EventTypes.track,
			eventPayload: {
				properties: {
					tax,
					fee,
					moment: new Date()
				}
			}
		}
	}
});
