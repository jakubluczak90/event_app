import React from 'react';
import PropTypes from 'prop-types';

import './Toaster.css';

const getToasterClasses = (type) => {
	let typeClass = 'toaster--primary'
	switch (type) {
		case('success'): {
			typeClass = 'toaster--success';
			break;
		}
		case('error'): {
			typeClass = 'toaster--error';
			break;
		}
	}

	return `toaster__inner ${typeClass}`
}
const Toaster = (props) => {
	return props?.visible ? (
			<div onClick={props.onClose} className="toaster">
				<div className={getToasterClasses(props.type)}>
					<p className="toaster__text">
						{props.children}
					</p>
				</div>
			</div>
		)
		: null;
}

Toaster.propTypes = {
	onClose: PropTypes.func.isRequired,
	type: PropTypes.string,
}

export default Toaster;