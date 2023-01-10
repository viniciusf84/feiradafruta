import styled from 'styled-components';
import Bateman from '../../assets/images/bateman.jpg';
import { centerContent, colors } from '../../styles/variables';

export const ErrorContainer = styled.div`
	${centerContent()}

	background: url(${Bateman}) no-repeat center center;
	background-size: cover;
	color: ${colors.white};
	font-size: 2rem;
	height: 100vh;
`;
