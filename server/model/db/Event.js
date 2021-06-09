const mongoose = require('mongoose');
const validator = require('validator');

const { Schema, model } = mongoose;

const Event = new Schema({
	firstName: {
		type: String,
		required: true,
		min: 2,
	},
	lastName: {
		type: String,
		required: true,
		min: 2,
	},
	email: {
		type: String,
		required: true,
		min: 3,
		validate: {
			validator(val) {
				return validator.isEmail(val);
			},
			message(props) {
				return `${props.value} is not a valid email address!`;
			},
		},
	},
	date: {
		type: String,
		required: true,
		validate: {
			validator(val) {
				const regExp = /^([0-9]{4})(-[0-9]{2}){2}$/;
				return regExp.exec(val);
			},
			message(props) {
				return `${props.value} is not a valid date format`
			}
		}
	}
});

module.exports = model('Event', Event);
