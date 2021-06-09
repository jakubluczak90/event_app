import React from 'react';

import FormInput from "./FormInput";
import { fireEvent, render } from "@testing-library/react";

const setup = () => {
	const utils = render(<FormInput onChange={() => {
	}} label="name" name="name" value=""/>)
	const input = utils.getByLabelText('name')

	return {
		input,
		...utils,
	}
}

test('renders form input properly', () => {
	const { input } = setup();

	expect(input.value).toBe('');
	fireEvent.change(input, { target: { value: '23' } })
	expect(input.value).toBe('23');
})