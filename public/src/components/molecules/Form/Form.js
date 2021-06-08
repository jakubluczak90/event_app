import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

import FormInput from "../../atoms/FormInput/FormInput";
import Button from "../../atoms/Button/Button";

const defaultEvent = {
	firstName: '',
	lastName: '',
	email: '',
	date: '',
}

const EventForm = (props) => {
	const [event, setEvent] = useState(defaultEvent);

	useEffect(() => {
		props.onFormChange(event);
	},[event]);

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
			<Button
				type="success"
				role="submit"
			>Submit</Button>
		</form>
	)
}

EventForm.propTypes = {
	onFormChange: PropTypes.func.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
}

export default EventForm;

