import { useEffect, useContext } from 'react';
// routes
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../config/routes';

// context
import { LoginContext } from '../../contexts/LoginContext';

import { LoginContainer } from './Login.styled';
import LoginForm from '../forms/LoginForm/LoginForm';

const Login = () => {
	const navigate = useNavigate();
	const loginContext = useContext(LoginContext);
	const { isAuthorized } = loginContext;

	useEffect(() => {
		if (isAuthorized) {
			navigate(HOME);
		}
	}, [isAuthorized]);

	return (
		<LoginContainer>
			<div className="login-form__wrapper">
				<div className="title text-center">
					Entre na <span className="brand">Feira da Fruta</span>
				</div>
				<div className="login-form">
					<LoginForm backHome={navigate(HOME)} />
				</div>
			</div>
		</LoginContainer>
	);
};

export default Login;
