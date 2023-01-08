import styled from 'styled-components';
import { colors } from '../../styles/variables';

export const Container = styled.div`
	margin: 2rem 0.7rem;

	label {
		display: flex;
		flex-direction: column;
		gap: 8px;

		span {
			display: block;
		}
	}

	input[type='text'],
	input[type='password'] {
		height: 25px;
		border: none;
		border-bottom: 2px solid rgba(0, 0, 0, 0.2);
		padding: 1rem 0.5rem;
		font-size: 1rem;
		transition: 0.2s ease-in border-color;

		&:focus {
			border-bottom: 2px solid ${colors.green};
			outline: 1px solid ${colors.white};
		}
	}
`;
