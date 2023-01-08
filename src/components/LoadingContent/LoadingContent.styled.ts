import styled from 'styled-components';
import { centerContent, colors } from '../../styles/variables';

export const LoadingContentStyled = styled.div`
	${centerContent()};

	color: ${colors.green};
	padding: 30px 0;
	margin-bottom: 60px;

	.loading-content__wrapper {
		p {
			margin-bottom: 16px;
		}
	}

	.spinner {
		animation: spin infinite 2s linear;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
