import styled from 'styled-components';
import { rem } from 'polished';

export const HomeStyled = styled.section`
	min-height: calc(100vh - 107px);

	.home__icon {
		margin-bottom: 30px;
	}

	p {
		font-size: ${rem('13px')};
	}

	.btn {
		margin-top: 50px;
	}
`;
