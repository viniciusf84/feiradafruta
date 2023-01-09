import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { colors } from '../../styles/variables';

export const StyledFooter = styled.footer`
	height: 40px;
	line-height: 40px;
	text-align: center;
	background-color: ${rgba(colors.background_gray, 0.2)};

	p {
		font-size: ${rem('12px')};
	}
`;
