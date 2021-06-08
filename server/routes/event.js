const router = require('express').Router();
const Event = require('./../db/Event');

router.get('/', async (req, res) => {
	try {
		const events = await Event.find({})
		res.send(events);
	} catch(e) {
		res.sendStatus(500);
	}
})

router.post('/', async (req, res) => {
	const { email, firstName, lastName, date } = req.body;
	const event = new Event({ email, firstName, lastName, date });

	try {
		const e = await event.save();
		res.send(e);
	} catch(e) {
		if (e.errors) {
			return res.sendStatus(400);
		}
		res.sendStatus(500);
	}
})

module.exports = router;
