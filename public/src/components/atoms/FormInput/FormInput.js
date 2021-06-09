import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './FormInput.css';

const FormInput = (props) => {
	const [value, setValue] = useState(props.value)
	const valueFromProps = props.value;

	useEffect(() => {
		setValue(valueFromProps)
	}, [valueFromProps]);

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
					setValue(value);
					props.onChange(value);
				}}
				value={value}
			/>
		</div>
	);
};

FormInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.string,
	onChange: PropTypes.func.isRequired,
}

export default FormInput
