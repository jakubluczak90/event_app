import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getEvents } from "../../../api/getEvents";
import './YourEvents.css';
import { addEvents } from "../../../store/actions";

const YourEvents = (props) => {
	useEffect(async () => {
		try {
			const events = await getEvents();
			props.addEvents(events.data);
		} catch(e) {
			// TODO - add error handling
			console.warn(e)
		}
	}, []);

	return (
		<div></div>
	)
};

const mapStateToProps = (state) => {
	return {
		events: state.events,
	};
};

const mapActionsToProps = (dispatch) => {
	return {
		addEvents: (data) => dispatch(addEvents(data)),
	};
};


export default connect(mapStateToProps, mapActionsToProps)(YourEvents);