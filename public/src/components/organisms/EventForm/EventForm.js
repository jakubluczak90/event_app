import React from 'react';
import { connect } from "react-redux";
import Form from './../../molecules/Form/Form';
import { updateEvent } from "../../../store/actions";

const EventForm = (props) => {
	return (
		<div>
			<Form
				onFormSubmit={() => {
				}}
				onFormChange={(value) => {
					props.updateEvent(value);
				}}
			/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		event: state.event,
	}
};
const mapActionsToProps = (dispatch) => {
	return {
		updateEvent(value) {
			dispatch(updateEvent(value))
		}
	}
};
export default connect(mapStateToProps, mapActionsToProps)(EventForm)