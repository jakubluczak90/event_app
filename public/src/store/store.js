import { createStore } from 'redux';
import { ADD_EVENTS } from "./actions";

const defaultState = {
	events: [],
};

const eventReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_EVENTS: {
			return {
				events: action.events,
			}
		}
		default: {
			return state;
		}
	}
}

const store = createStore(eventReducer);

export { store };