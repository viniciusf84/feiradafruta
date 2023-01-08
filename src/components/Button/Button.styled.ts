import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 0.7rem;
`;

export const SubmitButton = styled.button`
	background-color: ${colors.green};
	border: 1px solid ${colors.green};
	border-radius: 0.25rem;
	color: ${colors.white};
	cursor: pointer;
	font-size: 1rem;
	padding: 0.7rem;
	width: 100%;
	transition: 0.2s ease-in background-color;

	&:disabled {
		background-color: ${colors.green_clear};
		border-color: ${colors.green_clear};
		cursor: default;
	}
`;
