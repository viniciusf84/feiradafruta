import styled from 'styled-components';
import { colors, fadeIn } from '../../styles/variables';

export const LoginContainer = styled.section`
	box-shadow: ${colors.box_shadow};
	width: 400px;

	.login-form {
		${fadeIn()}

		background-color: ${colors.white};
		padding: 2rem;
		font-size: 1.125rem;
	}

	.title {
		background-color: ${colors.green};
		font-size: 1.8rem;
		padding: 1.2rem 1.6rem;
		color: ${colors.white};
	}

	.error {
		${fadeIn()}

		color: red;
		font-size: 0.96rem;
		margin-top: 0.6rem;
	}
`;
