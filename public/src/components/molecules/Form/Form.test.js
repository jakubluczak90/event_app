import React from 'react';

import Form from "./Form";
import { fireEvent, render } from "@testing-library/react";

const mockedFunc = jest.fn();

const setup = () => {
	const utils = render(<Form onFormSubmit={mockedFunc}/>)

	return {
		...utils,
	}
}

test('cannot submit if fields are not filled', () => {
	const utils = setup();

	const submitButton = utils.getByText('Submit')
	fireEvent(submitButton, new MouseEvent('click'));
	expect(mockedFunc).toHaveBeenCalledTimes(0);
});

test('submit works if fields are not filled', () => {
	const utils = setup();

	const firstNameInput = utils.getByLabelText('firstName');
	fireEvent.change(firstNameInput, { target: { value: 'Jakub' } });

	const lastNameInput = utils.getByLabelText('lastName');
	fireEvent.change(lastNameInput, { target: { value: 'Luczak' } });

	const emailInput = utils.getByLabelText('email')
	fireEvent.change(emailInput, { target: { value: 'test@test.pl' } });

	const submitButton = utils.getByText('Submit')
	fireEvent(submitButton, new MouseEvent('click'));
	expect(mockedFunc).toHaveBeenCalledTimes(1);
});
