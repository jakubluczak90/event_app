import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getEvents } from "../../../api/getEvents";
import './YourEvents.css';
import { addEvents } from "../../../store/actions";
import YourEvent from "../../molecules/YourEvent/YourEvent";

const YourEvents = (props) => {
		useEffect(async () => {
			try {
				const events = await getEvents();
				props.addEvents(events.data);
			} catch (e) {
				// TODO - add error handling
				console.warn(e)
			}
		}, []);

		return (
			<div className="your-events">
				<div className="yourEvents__header">
					<p>First Name</p>
					<p>Last Name</p>
					<p>Email address</p>
					<p>Date</p>
				</div>
				<div className="your-events__events">
					{
						props.events.map(event => {
							return (
								<YourEvent
									key={event._id}
									firstName={event.firstName}
									lastName={event.lastName}
									email={event.email}
									date={event.date}
								/>
							)
						})
					}
				</div>
			</div>
		)
	}
;

const mapStateToProps = (state) => {
		return {
			events: state.events,
		};
	}
;

const mapActionsToProps = (dispatch) => {
		return {
			addEvents: (data) => dispatch(addEvents(data)),
		};
	}
;


export default connect(mapStateToProps, mapActionsToProps)(YourEvents);