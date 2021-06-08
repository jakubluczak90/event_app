export const UPDATE_EVENT = 'UPDATE_EVENT';

export const updateEvent = (value) => {
	return {
		type: UPDATE_EVENT,
		value,
	}
}