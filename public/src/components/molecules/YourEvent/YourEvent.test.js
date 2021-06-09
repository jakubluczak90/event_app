import React from 'react';

import YourEvent from "./YourEvent";
import { render } from "@testing-library/react";

const setup = () => {
	const utils = render(<YourEvent date="2012-02-12" email="test@test.pl" firstName="firstName" lastName="lastName"/>)

	return {
		...utils,
	}
}

test('renders form with firstName properly', () => {
	const utils = setup();

	const firstName = utils.getByText('firstName');
	expect(firstName).toBeVisible();
});

test('renders form with firstName properly', () => {
	const utils = setup();

	const lastName = utils.getByText('lastName');
	expect(lastName).toBeVisible();
});

test('renders form with firstName properly', () => {
	const utils = setup();

	const email = utils.getByText('test@test.pl');
	expect(email).toBeVisible();
});

test('renders form with firstName properly', () => {
	const utils = setup();

	const date = utils.getByText('2012-02-12');
	expect(date).toBeVisible();
});