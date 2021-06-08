import React, { useState, useCallback, useEffect } from 'react';
import validator from 'validator';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
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

const defaultEvent = {
	firstName: '',
	lastName: '',
	email: '',
	date: getDate(new Date()),
}

const EventForm = (props) => {
	const [event, setEvent] = useState(defaultEvent);
	const [isValid, setValid] = useState(false);
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		setValid(validateForm(event))
		props.onFormChange(event);
	}, [event]);

	const validateForm = (event) => {
		const regExp = /^([0-9]{4})(-[0-9]{2}){2}$/;

		const isFirstNameValid = event?.firstName?.length;
		const isLastNameValid = event?.lastName?.length;
		const isEmailValid = validator.isEmail(event?.email);
		const isDatePickerValid = regExp.exec(event?.date);

		return isFirstNameValid && isLastNameValid && isEmailValid && isDatePickerValid;
	}

	const onInputChange = useCallback((name, value) => {
		const eventCopy = { ...event };
		eventCopy[name] = value;

		setEvent(eventCopy);
	});

	const onFormSubmit = (e) => {
		e.preventDefault();
		props.onFormSubmit();
	}

	return (
		<form
			className="form"
			onSubmit={onFormSubmit}
		>
			<FormInput label="firstName" name="firstName" onChange={onInputChange}/>
			<FormInput label="lastName" name="lastName" onChange={onInputChange}/>
			<FormInput label="email" name="email" type="email" onChange={onInputChange}/>
			<DatePicker selected={date} onChange={(value) => {
				const date = getDate(value);

				setDate(value)

				setEvent({
					...event,
					date
				})

			}}/>
			<Button
				type="success"
				role="submit"
				disabled={!isValid}
			>Submit</Button>
		</form>
	)
}

EventForm.propTypes = {
	onFormChange: PropTypes.func.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
}

export default EventForm;

