import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

const textProp = 'Feira da Fruita';

test('Footer', () => {
	it('renders given text', () => {
		const { getByText } = render(<Footer text={textProp} />);

		expect(getByText(textProp)).toBeInTheDocument();
	});
});
