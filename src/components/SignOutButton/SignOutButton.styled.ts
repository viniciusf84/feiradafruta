import styled from 'styled-components';
import { rgba } from 'polished';
import { colors } from '../../styles/variables';

export const SignOutButtonStyled = styled.button`
	color: ${colors.white};
	cursor: pointer;
	font-size: 1rem;
	height: 40px;
	width: 40px;
	text-align: center;
	border-radius: 50%;
	background-color: ${rgba(colors.green, 0.7)};
	border: none;

	position: fixed;
	bottom: 50px;
	right: 20px;
	transition: background-color 0.2s ease-out;

	&:hover {
		background-color: ${rgba(colors.green, 0.9)};
	}
`;
