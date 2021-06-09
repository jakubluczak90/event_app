const EventModel = require('./db/Event');

class EventRepository {
	async saveEvent(firstName, lastName, email, date) {
		const event = new EventModel({ firstName, lastName, email, date });
		return event.save();
	}

	async getAllEvents() {
		return EventModel.find({});
	}
}

module.exports = EventRepository;