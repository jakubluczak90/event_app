import axios from 'axios';

export const postEvent = (event) => {
	return axios.post('/api/event', {
		...event
	})
}