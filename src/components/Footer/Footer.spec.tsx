import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

const textProp = 'Feira da Fruita';

describe('Footer', () => {
	it('renders given text', () => {
		render(<Footer text={textProp} />);

		expect(screen.getByText(textProp)).toBeInTheDocument();
	});
});
