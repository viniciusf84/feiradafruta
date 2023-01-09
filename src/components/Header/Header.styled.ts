import styled from 'styled-components';
import { rem, transitions } from 'polished';
import { colors, devices } from '../../styles/variables';

export const HeaderStyled = styled.header`
	padding: 1rem 0rem;
	background-color: ${colors.green};
	width: 100%;

	${transitions('background-color 0.2s ease-out')};

	.wrapper {
		display: flex;
	}

	a {
		color: ${colors.red};
	}

	.search-wrapper {
		width: 67%;
		position: relative;
	}

	.desktop {
		display: none;

		@media ${devices.tablet} {
			display: block;
		}
	}

	.mobile {
		display: block;

		.wrapper {
			justify-content: space-between;
		}

		.search-wrapper {
			width: 100%;
			padding: 0 16px;
			margin-top: 8px;
		}

		@media ${devices.tablet} {
			display: none;
		}
	}
`;
