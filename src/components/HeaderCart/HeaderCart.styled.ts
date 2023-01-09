import styled from 'styled-components';
import { rem, rgba, transitions, triangle } from 'polished';
import { colors, fadeIn, devices } from '../../styles/variables';

export const HeaderCartStyled = styled.section`
	position: relative;
`;

export const HeaderCartButton = styled.button`
	display: inline-flex;
	justify-content: space-around;
	align-items: center;
	margin-left: 10px;
	width: 60px;
	height: 100%;
	border: none;
	background-color: transparent;
	cursor: pointer;
	border-radius: 8px;
	${transitions('background-color 0.2s ease-out')};

	@media ${devices.tablet} {
		width: 100px;
	}

	&.hover {
		background-color: ${rgba(colors.white, 0.2)};

		span {
			transform: scale(1.25);
		}
	}

	span {
		font-size: ${rem('14px')};
		color: ${colors.white};
		${transitions('transform 0.2s ease-out')};
	}

	svg {
		color: ${colors.white};
		font-size: ${rem('20px')};
	}
`;

export const CartModal = styled.div`
	${fadeIn()}

	position: absolute;
	right: 0;
	top: 30px;
	height: 300px;
	width: 280px;
	background-color: ${colors.white};
	color: ${colors.text_dark};
	padding: 20px 8px 0 12px;
	z-index: 100;
	box-shadow: ${rgba(colors.black, 0.2)} 0px 2px 6px;
	animation: fadeIn 0.3s;
	overflow-y: scroll;

	@media ${devices.tablet} {
		width: 400px;
	}

	&.empty {
		font-size: ${rem('20px')};
		text-align: center;
		height: 90px;
		padding: 30px 20px;
	}

	&:before {
		content: '';
		position: absolute;
		top: -14px;
		right: 10px;

		@media ${devices.tablet} {
			right: 36px;
		}

		${triangle({
			pointingDirection: 'top',
			width: '25px',
			height: '15px',
			foregroundColor: colors.white,
		})}
	}
`;
