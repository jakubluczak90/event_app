const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const eventRouter = require('./routes/event');

const log = require('./utils/log');
const establishDbConnection = require('./db/createDb');

const app = express();
dotenv.config();

establishDbConnection()
	.then(() => {
		log('Db Connection established');
	}).catch(() => {
		throw new Error('Unable to connect to db');
})

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//routes

app.use('/api/event', eventRouter);

app.listen(process.env.PORT, () => {
	log(`app listening on port ${process.env.PORT}`);
})


