import axios from 'axios';

export const getEvents = () => {
	return axios.get('/api/event' );
}