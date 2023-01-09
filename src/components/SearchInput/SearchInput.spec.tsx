import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchInput from './SearchInput';

const placeholder = 'John Doe';
const name = 'search-input';
const searchButton = 'search-button';
const onSearch = jest.fn();

describe('SearchInput', () => {
	it('should render placeholder text if empty', () => {
		render(
			<SearchInput name={name} placeholder={placeholder} onSearch={onSearch} />,
		);

		expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
	});

	it('button should start disabled', () => {
		render(
			<SearchInput name={name} placeholder={placeholder} onSearch={onSearch} />,
		);

		const button = screen.getByTestId(searchButton);

		expect(button).toBeDisabled();
	});

	it('button should be enabled after type 3 characters', () => {
		render(
			<SearchInput name={name} placeholder={placeholder} onSearch={onSearch} />,
		);

		const input = screen.getByTestId(name);
		const button = screen.getByTestId(searchButton);

		userEvent.type(input, 'Hello');

		expect(button).toBeEnabled();
	});

	it('should render user text', () => {
		render(
			<SearchInput name={name} placeholder={placeholder} onSearch={onSearch} />,
		);

		const input = screen.getByTestId(name);

		userEvent.click(input);
		userEvent.type(input, 'Hello');
		expect(input).toHaveValue('Hello');
	});

	it('should call the onSearch callback handler', () => {
		render(
			<SearchInput name={name} placeholder={placeholder} onSearch={onSearch} />,
		);

		const input = screen.getByTestId(name);

		userEvent.click(input);
		userEvent.type(input, 'Hello');

		expect(onSearch).toHaveBeenCalledTimes(1);
	});

	it('should call the onSearch callback handler by clicking on button', () => {
		render(
			<SearchInput name={name} placeholder={placeholder} onSearch={onSearch} />,
		);

		const input = screen.getByTestId(name);

		userEvent.type(input, 'Hello');

		const button = screen.getByTestId(searchButton);

		userEvent.click(button);

		expect(onSearch).toBeCalled();
	});
});
