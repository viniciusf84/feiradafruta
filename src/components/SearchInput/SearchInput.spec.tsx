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

	it('button should be enabled after type 3 characters', async () => {
		render(
			<SearchInput name={name} placeholder={placeholder} onSearch={onSearch} />,
		);

		const input = screen.getByTestId(name);
		const button = screen.getByTestId(searchButton);

		await userEvent.click(input);
		await userEvent.type(input, 'Hellooo');

		expect(button).toBeEnabled();
	});

	it('should render user text', async () => {
		render(
			<SearchInput name={name} placeholder={placeholder} onSearch={onSearch} />,
		);

		const input = screen.getByTestId(name);

		await userEvent.click(input);
		await userEvent.type(input, 'Hello');

		expect(input).toHaveValue('Hello');
	});

	it('should call the onSearch callback handler on Enter', async () => {
		render(
			<SearchInput name={name} placeholder={placeholder} onSearch={onSearch} />,
		);

		const input = screen.getByTestId(name);

		await userEvent.click(input);
		await userEvent.type(input, 'Hello');
		await userEvent.keyboard('[Enter]');

		expect(onSearch).toHaveBeenCalledTimes(1);
	});

	it('should call the onSearch callback handler by clicking on button', async () => {
		render(
			<SearchInput name={name} placeholder={placeholder} onSearch={onSearch} />,
		);

		const input = screen.getByTestId(name);

		await userEvent.type(input, 'Hello');

		const button = screen.getByTestId(searchButton);

		await userEvent.click(button);

		expect(onSearch).toBeCalled();
	});
});
