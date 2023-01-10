import styled from 'styled-components';
import { rem, transitions } from 'polished';
import { colors } from '../../styles/variables';

export const SearchInputStyled = styled.div`
	font-size: ${rem('12px')};
	color: ${colors.text_dark};

	input {
		background: ${colors.white};
		border: none;
		padding: 0.6rem;
		width: 100%;
		font-size: ${rem('14px')};
		font-weight: normal;
		border-radius: 8px;

		&:focus,
		&:active {
			border-color: ${colors.white};
			outline: 1px solid ${colors.green};
		}
	}

	.icon__wrapper {
		background-color: transparent;
		border: none;
		color: ${colors.background_dark};
		cursor: pointer;
		float: right;
		margin: -30px 12px 0 0;
		position: relative;

		${transitions('color 0.2s ease-out')};

		&:disabled {
			color: ${colors.background_clear};
			cursor: none;
		}

		&:not([disabled]) {
			&:hover {
				color: ${colors.background_gray};
			}
		}

		svg {
			width: 0.9rem;
		}
	}
`;
