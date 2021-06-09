import React from 'react';

import Button from "./Button";
import { render } from "@testing-library/react";

const setup = () => {
	const utils = render(<Button disabled={true}>Title</Button>)
	const button = utils.getByText('Title');

	return {
		button,
		...utils,
	}
}

test('renders button properly', () => {
	const { button } = setup();

	expect(button.textContent).toBe('Title');
	expect(button.disabled).toBe(true);
})