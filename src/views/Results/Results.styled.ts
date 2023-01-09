import styled from 'styled-components';
import { rem, transitions, rgba } from 'polished';
import { colors, centerContent, fadeIn, devices } from '../../styles/variables';

export const ResultList = styled.section`
	${fadeIn()}

	margin: 0 0 60px;
	display: flex;
	flex-wrap: wrap;
	gap: 3%;

	.page-title {
		font-size: ${rem('24px')};
		font-weight: 700;
		display: block;
		width: 100%;
		margin: 2rem 0 2rem;
		text-transform: uppercase;

		&:after {
			content: '';
			background-color: ${colors.green};
			width: 100px;
			height: 4px;
			display: block;
			margin-top: 12px;
		}
	}

	.item {
		${centerContent()};

		cursor: pointer;
		flex-direction: column;
		background-color: ${colors.white};
		opacity: 1;
		animation: fadeIn 0.3s;
		width: 100%;
		min-height: 200px;
		margin-bottom: 14px;
		box-shadow: ${rgba(colors.black, 0.2)} 0px 2px 6px;
		border-bottom: 2px solid ${colors.green};

		@media ${devices.tablet} {
			width: 48%;
			margin-bottom: 2%;
		}

		@media ${devices.laptop} {
			width: 31.3333333333%;
		}

		a {
			color: ${colors.white};
		}

		.wrap {
			text-align: center;
			position: relative;
			height: 250px;
			${transitions('background-color 0.2s ease-out')};
		}

		.img__wrapper {
			${centerContent()};

			overflow: hidden;
			max-height: 100%;

			img {
				width: auto;
				max-width: 250px;
				object-fit: contain;
				animation: fadeIn 0.3s;
				${transitions(['transform 0.5s ease-out', 'opacity .3s ease-in'])};
			}
		}

		.text {
			cursor: pointer;
			display: flex;
			justify-content: space-between;
			width: 100%;

			span {
				display: block;
				font-size: ${rem('16px')};
				padding: 10px 12px;
				margin: 0;
				text-transform: capitalize;
				font-weight: bold;

				&:hover & {
					color: ${colors.green};
				}

				&.title {
					text-align: left;
				}

				&.price {
					text-align: right;
				}
			}
		}

		&:hover {
			a {
				color: ${colors.yellow};
			}

			.title {
				color: ${colors.green};
			}

			.img__wrapper {
				img {
					transform: scale(1.14) translateY(7px);
				}
			}
		}
	}
`;
