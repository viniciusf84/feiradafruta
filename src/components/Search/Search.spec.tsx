import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { ShopContextProvider } from '../../contexts/ShopContext';
import { electric } from '../../themes';
import userEvent from '@testing-library/user-event';
import Search from './Search';
import { toBeInTheDocument } from '@testing-library/jest-dom';

const searchResults = 'search-results';
const searchInput = 'search-input';
const searchButton = 'search-button';

jest.mock('axios');

describe('Search', () => {
	test('fetches results from search and displays them', async () => {
		const result = { name: 'Pikachu' };

		const promise = Promise.resolve(result);
		axios.get.mockImplementationOnce(() => promise);

		render(
			<ShopContextProvider theme={electric}>
				<Search />
			</ShopContextProvider>,
		);

		const button = screen.getByTestId(searchButton);

		await userEvent.type(screen.getByTestId(searchInput), 'Pikachu');
		await userEvent.click(button);

		// await act(() => promise);

		expect(screen.getByTestId(searchResults)).toHaveTextContent('Pikachu');
	});

	test('fetches results from search and fails', async () => {
		axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

		render(
			<ShopContextProvider>
				<Search />
			</ShopContextProvider>,
		);

		const button = screen.getByTestId(searchButton);

		await userEvent.type(screen.getByTestId(searchInput), 'Pikachu');
		await userEvent.click(button);

		expect(screen.getByTestId(searchResults)).toHaveTextContent(
			'Pikachu not found.',
		);
	});
});
