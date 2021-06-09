import React, { useState, useEffect } from 'react';
import validator from 'validator';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';
import './Form.css';

import FormInput from "../../atoms/FormInput/FormInput";
import Button from "../../atoms/Button/Button";

const getDate = (date) => {
	let day = date.getDate();
	let month = date.getMonth() + 1;
	const year = date.getFullYear();

	if (day < 10) {
		day = `0${day}`;
	}
	if (month < 10) {
		month = `0${month}`
	}

	return `${year}-${month}-${day}`;
}

const isFormValid = (event) => {
	const regExp = /^([0-9]{4})(-[0-9]{2}){2}$/;

	const isFirstNameValid = event?.firstName?.length;
	const isLastNameValid = event?.lastName?.length;
	const isEmailValid = validator.isEmail(event?.email || '');
	const isDatePickerValid = regExp.exec(event?.date);

	return isFirstNameValid && isLastNameValid && isEmailValid && isDatePickerValid;
}
const defaultEvent = {
	firstName: '',
	lastName: '',
	email: '',
	date: new Date(),
};

const EventForm = (props) => {
	const [event, setEvent] = useState(defaultEvent);
	const [datepickerValue, setDatepickerValue] = useState(defaultEvent.date);

	useEffect(() => {
		const date = getDate(datepickerValue);

		setEvent({
			...event,
			date,
		})
	},[datepickerValue]);

	const onFormChange = (name) => {
		return (value) => {
			const eventCopy = {...event};
			eventCopy[name] = value;
			setEvent(eventCopy);
		}
	}

	return (
		<form
			className="form"
			onSubmit={(e) => {
				e.preventDefault();
				props.onFormSubmit(event);
				setEvent({
					...defaultEvent,
					date: getDate(new Date()),
				})
			}}
		>
			<FormInput
				value={event.firstName}
				label="firstName"
				name="firstName"
				onChange={onFormChange('firstName')}
			/>
			<FormInput
				value={event.lastName}
				label="lastName"
				name="lastName"
				onChange={onFormChange('lastName')}
			/>
			<FormInput
				value={event.email}
				label="email"
				name="email"
				type="email"
				onChange={onFormChange('email')}
			/>
			<DatePicker selected={datepickerValue} onChange={setDatepickerValue}/>
			<Button
				type="success"
				role="submit"
				disabled={!isFormValid(event)}
			>Submit</Button>
		</form>
	)
}

EventForm.propTypes = {
	onFormSubmit: PropTypes.func.isRequired,
}

export default EventForm;

