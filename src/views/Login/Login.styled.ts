import { rem } from 'polished';
import styled from 'styled-components';
import { colors, fadeIn, centerContent } from '../../styles/variables';

export const LoginContainer = styled.main`
	${centerContent()}

	flex-direction: column;
	gap: 20px;
	height: 100vh;

	.login-form__wrapper {
		box-shadow: ${colors.box_shadow};
		width: 480px;
	}

	.login-form {
		${fadeIn()}

		background-color: ${colors.white};
		padding: 2rem;
		font-size: 1.125rem;
	}

	.title {
		background-color: ${colors.green};
		font-size: ${rem(26)};
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
