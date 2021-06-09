import React from 'react';
import PropTypes from 'prop-types';

import './YourEvent.css';

const YourEvent = (props) => {
	return (
		<div className="your-event">
			<p className="your-event__firstName">{props.firstName}</p>
			<p className="your-event__lastName">{props.lastName}</p>
			<p className="your-event__email">{props.email}</p>
			<p className="your-event__date">{props.date}</p>
		</div>
	)
}

YourEvent.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
}
export default YourEvent;