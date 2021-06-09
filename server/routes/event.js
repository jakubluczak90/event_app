const router = require('express').Router();
const EventRepository = require('./../model/EventRepository');

const eventRepository = new EventRepository();

router.get('/', async (req, res) => {
	try {
		const events = await eventRepository.getAllEvents();
		res.send(events);
	} catch(e) {
		res.sendStatus(500);
	}
})

router.post('/', async (req, res) => {
	const { email, firstName, lastName, date } = req.body;

	try {
		const e = await eventRepository.saveEvent(email, firstName, lastName, date)
		res.send(e);
	} catch(e) {
		if (e.errors) {
			return res.sendStatus(400);
		}
		res.sendStatus(500);
	}
})

module.exports = router;
