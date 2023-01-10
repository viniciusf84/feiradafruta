import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

const usernameInput = 'username-input';
const passwordInput = 'password-input';
const submitButton = 'submit-button';
const backHome = jest.fn();

describe('LoginForm Component', () => {
	it('should submit the username and password', async () => {
		// GIVEN
		const onSubmitMock = jest.fn();
		const username = 'test';
		const password = 'test';

		// WHEN
		render(<LoginForm />);

		await userEvent.type(screen.getByTestId(usernameInput), username);
		await userEvent.type(screen.getByTestId(passwordInput), password);

		await userEvent.click(screen.getByTestId(submitButton));

		expect(onSubmitMock).toHaveBeenCalledWith(
			{ username, password },
			expect.any(Function),
			expect.any(Object),
		);
	});

	// it('should show a errorMessage message if passed one', () => {
	// 	// GIVEN
	// 	const onSubmitMock = jest.fn();
	// 	const errorMsg = 'errorMessage message';

	// 	// WHEN
	// 	render(<LoginForm />);

	// 	// THEN
	// 	expect(getByText(errorMsg)).not.toBeNull();
	// });
});
