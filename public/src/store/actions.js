export const ADD_EVENTS = 'ADD_EVENTS';

export const addEvents = (events) => {
	return {
		type: ADD_EVENTS,
		events,
	}
}