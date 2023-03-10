import styled from 'styled-components';
import { rem, transitions, rgba } from 'polished';
import { colors, fadeIn, devices } from '../../styles/variables';

export const Details = styled.div`
	${fadeIn()};

	opacity: 1;
	min-height: calc(100vh - 107px);
	padding-top: 40px;

	h1 {
		font-size: ${rem('40px')};
		margin: 0 0 2rem;
	}

	a.back {
		display: inline-block;
		background-color: none;
		color: ${colors.green};
		font-weight: bold;
		padding: 10px 0;
		margin: 30px 0 40px;
		${transitions('background-color 0.2s ease-out')};

		&:hover {
			color: ${colors.text_gray};
		}

		svg {
			margin-right: 8px;
		}
	}

	.row {
		display: flex;
		gap: 2rem;
		justify-content: space-between;
		align-items: flex-start;

		flex-direction: column-reverse;

		@media ${devices.tablet} {
			flex-direction: row;
		}

		.col {
			background-color: ${colors.white};
			width: 100%;
			box-shadow: ${rgba(colors.black, 0.2)} 0px 2px 6px;

			@media ${devices.tablet} {
				width: 50%;
			}

			&__info {
				width: 100%;

				@media ${devices.tablet} {
					width: 70%;
				}
			}

			&__add {
				background-color: ${colors.white};
				padding: 1.6rem 2rem;

				@media ${devices.tablet} {
					width: 50%;
				}

				span {
					font-size: ${rem('12px')};
				}
			}

			.image-wrapper {
				animation: fadeIn 1s;
				background-color: ${colors.white};
				margin-bottom: 32px;

				figure {
					margin: 0 0 16px;
				}
			}
		}

		.list {
			padding: 0;
			margin: 0 0 16px;

			li {
				list-style: none;
				display: inline;

				&:after {
					content: ', ';
				}

				&:last-of-type {
					&:after {
						content: '';
					}
				}
			}
		}
	}

	.text {
		margin: 0 30px 0 0px;
		padding: 1rem 1.4rem;

		@media ${devices.tablet} {
			margin: 0 30px 0 20px;
		}

		p {
			margin-bottom: ${rem('14px')};
		}

		@media ${devices.tablet} {
			margin: 0;
		}

		span {
			font-weight: bold;
		}

		.price {
			font-size: ${rem('42px')};
			margin: 0;
		}
	}

	.small {
		display: block;
		margin: 10px 0;
		font-size: ${rem('13px')};
	}

	strong {
		color: ${colors.text_gray};
		font-weight: normal;
	}

	a {
		color: ${colors.yellow};
	}
`;
