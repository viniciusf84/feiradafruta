import React from 'react';
import { StyledFooter } from './Footer.styled';

interface FooterProps {
	text: string;
}

function Footer({ text }: FooterProps) {
	return (
		<StyledFooter id="footer">
			<p>{text}</p>
		</StyledFooter>
	);
}

export default Footer;
