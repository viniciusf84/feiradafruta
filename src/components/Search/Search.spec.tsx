import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { ShopContextProvider } from '../../contexts/ShopContext';
import userEvent from '@testing-library/user-event';
import Search from './Search';

const searchResults = 'search-results';
const searchInput = 'search-input';
const searchButton = 'search-button';
const result = {
	id: 312,
	name: 'Maçã',
	slug: 'maca',
	price: 10,
	image: 'img',
};

describe('Search', () => {
	test('fetches results from search and displays them', async () => {
		render(
			<ShopContextProvider>
				<Search />
			</ShopContextProvider>,
		);

		const button = screen.getByTestId(searchButton);

		await userEvent.type(screen.getByTestId(searchInput), 'Maçã');
		await userEvent.click(button);

		// await act(() => Promise.resolve(result));

		await waitFor(async () => {
			expect(screen.getByTestId(searchResults)).toHaveTextContent('Maçã');
		});
	});

	test('fetches results from search and fails', async () => {
		await act(() => Promise.reject(new Error()));

		render(
			<ShopContextProvider>
				<Search />
			</ShopContextProvider>,
		);

		const button = screen.getByTestId(searchButton);

		await userEvent.type(screen.getByTestId(searchInput), 'paletó');
		await userEvent.click(button);

		await waitFor(async () => {
			expect(screen.getByTestId(searchResults)).toHaveTextContent(
				'Não encontramos paletó na Feira da Fruta.',
			);
		});
	});
});
