import React, { useState } from 'react';
import Form from './../../molecules/Form/Form';
import { postEvent } from "../../../api/postEvent";
import Loader from 'react-loader-spinner';
import Toaster from "../../molecules/Toaster/Toaster";
import {connect} from "react-redux";
import { getEvents } from "../../../api/getEvents";
import { addEvents } from "../../../store/actions";

const EventForm = (props) => {
	const [shouldDisplayLoader, setLoader] = useState(false)
	const [toaster, setToaster] = useState({ visible: false });

	const onFormSubmit = async (event) => {
		setLoader(true);
		try {
			await postEvent(event);
			const events = await getEvents();
			props.updateEvents(events.data);


			setToaster({
				type: 'success',
				message: 'Event saved',
				visible: true,
			});
		} catch (e) {
			setToaster({
				type: 'error',
				message: 'We are sorry, something went wrong',
				visible: true,
			})
		} finally {
			setLoader(false);
		}
	}
	return (
		<div>
			<Loader
				visible={shouldDisplayLoader}
				type="Circles"
				color="#00BFFF"
				height={80}
				width={80}
			/>
			<Toaster
				visible={toaster.visible}
				type={toaster.type}
				onClose={() => {
					setToaster({ visible: false })
				}}
			>{toaster.message}</Toaster>
			<Form
				onFormSubmit={onFormSubmit}
			/>
		</div>
	)
}

const mapActionsToProps = (dispatch) => {
	return {
		updateEvents: (events) => dispatch(addEvents(events))
	}
}

export default connect(null, mapActionsToProps)(EventForm);
