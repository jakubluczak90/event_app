const { createStore } = require('redux');

const defaultState = {
	firstName: '',
	lastName: '',
	email: '',
	date: '',
};

const eventReducer = (state = defaultState, action) => {

}

const store = createStore(eventReducer);

export { store };