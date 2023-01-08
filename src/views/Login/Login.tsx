import { LoginContainer } from './Login.styled';
import LoginForm from '../forms/LoginForm/LoginForm';

const Login = () => {
	return (
		<LoginContainer>
			<div className="login-form__wrapper">
				<div className="title text-center">Feira da Fruta</div>
				<div className="login-form">
					<LoginForm />
				</div>
			</div>
		</LoginContainer>
	);
};

export default Login;
