import { LoginContainer } from './Login.styled';
import LoginForm from '../forms/LoginForm/LoginForm';

const Login = () => {
	return (
		<LoginContainer>
			<div className="title text-center">Feira da Fruta</div>
			<div className="login-form">
				<LoginForm />
			</div>
		</LoginContainer>
	);
};

export default Login;
