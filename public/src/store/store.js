import { createStore } from 'redux';
import { UPDATE_EVENT } from "./actions";

const defaultState = {
	event: {
		firstName: '',
		lastName: '',
		email: '',
		date: '',
	},
};

const eventReducer = (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_EVENT: {
			return {
				event: action.value,
			}
		}
		default: {
			return state;
		}
	}
}

const store = createStore(eventReducer);

export { store };