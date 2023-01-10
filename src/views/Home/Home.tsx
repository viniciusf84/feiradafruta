import { useEffect, useContext } from 'react';
import { HomeStyled } from './Home.styled';
// routes
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../config/routes';
// context
import { LoginContext } from '../../contexts/LoginContext';
// Containers
import Results from '../Results';

function Home() {
	const navigate = useNavigate();
	const loginContext = useContext(LoginContext);
	const { isAuthorized } = loginContext;

	useEffect(() => {
		if (!isAuthorized) {
			navigate(LOGIN);
		}
	}, [isAuthorized]);

	return (
		<HomeStyled id="home">
			<main className="main-content">
				<Results />
			</main>
		</HomeStyled>
	);
}

export default Home;
