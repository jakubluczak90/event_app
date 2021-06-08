import React from 'react';
import PropTypes from 'prop-types';

import './FormInput.css';

const FormInput = (props) => {
	return (
		<div className="form-input">
			<label
				className="form-input__label"
				htmlFor={props.name}
			>{props.label}</label>
			<input
				className="form-input__input"
				type={props.type ? props.type : 'text'}
				id={props.name}
				name={props.name}
				placeholder={props.label}
				onChange={(event) => {
					const value = event.target.value;
					const name = props.name;
					props.onChange(name, value);
				}}
			/>
		</div>
	);
};

FormInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.string,
	onChange: PropTypes.func.isRequired,
}

export default FormInput
