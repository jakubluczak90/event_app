import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
	const getButtonClass = (type) => {
		switch (type) {
			case 'success': {
				return 'btn btn--success';
			}
			case 'danger': {
				return 'btn btn--danger';
			}
			default: {
				return 'btn btn-primary';
			}
		}
	};

	const buttonClass = getButtonClass(props.type)

	console.log(props.disabled)
	return (
		<button
			className={buttonClass}
			disabled={!!props.disabled}
			type={props.role ? props.role : 'button'}
			onClick={props.onClick ? props.onClick : null}
		>{props.children}</button>
	);
}

Button.propTypes = {
	role: PropTypes.string,
	type: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
}

export default Button;