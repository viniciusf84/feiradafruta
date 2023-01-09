import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShopContextProvider } from '../../contexts/ShopContext';
import userEvent from '@testing-library/user-event';
import Search from './Search';

const searchResults = 'search-results';
const searchInput = 'search-input';
const searchButton = 'search-button';

describe('Search', () => {
	test('fetches results from search and displays them', async () => {
		const result = { name: 'Maçã' };

		const promise = Promise.resolve(result);

		render(
			<ShopContextProvider>
				<Search />
			</ShopContextProvider>,
		);

		const button = screen.getByTestId(searchButton);

		await userEvent.type(screen.getByTestId(searchInput), 'Maçã');
		await userEvent.click(button);

		await (() => promise);

		expect(screen.getByTestId(searchResults)).toHaveTextContent('Maçã');
	});

	test('fetches results from search and fails', async () => {
		await (() => Promise.reject(new Error()));

		render(
			<ShopContextProvider>
				<Search />
			</ShopContextProvider>,
		);

		const button = screen.getByTestId(searchButton);

		await userEvent.type(screen.getByTestId(searchInput), 'paletó');
		await userEvent.click(button);

		expect(screen.getByTestId(searchResults)).toHaveTextContent(
			'Não encontramos paletó na Feira da Fruta.',
		);
	});
});
