import { useState, useCallback, useContext, useEffect, FormEvent } from 'react';

// context
import { LoginContext } from '../../../contexts/LoginContext';

//components
import Button from '../../../components/Button';
import InputContainer from '../../../components/InputContainer';

interface FormProps {
	username?: string | undefined;
	password?: string | undefined;
}
const initialValues = {
	username: undefined,
	password: undefined,
};

export default function LoginForm() {
	const [formData, setFormData] = useState<FormProps>(initialValues);
	const [errors, setErrors] = useState<FormProps>(initialValues);
	const [isPristine, setIsPristine] = useState<boolean>(false);
	const [isValid, setIsValid] = useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

	const loginContext = useContext(LoginContext);
	const { isAuthorized, setIsAuthorized } = loginContext;

	// User Login info
	const database = [
		{
			username: 'usuario',
			password: '123456',
			name: 'Bateman',
		},
	];

	const { username, password } = formData;

	// Generate JSX code for error message
	const renderErrorMessage = (error: 'username' | 'password') => {
		if (errors && errors[error]) {
			return <div className="error">{errors[error]}</div>;
		}
	};

	const handleChange = (event: FormEvent<HTMLInputElement>): void => {
		setFormData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));

		if (event.target.value !== '') {
			setErrors((prevState) => ({
				...prevState,
				[event.target.name]: undefined,
			}));
		}
	};

	const handlePristine = () => {
		setIsPristine(Object.values(formData).indexOf(undefined) > -1);
	};

	const formValidation = useCallback(() => {
		if (!isPristine && formData.username === '') {
			setErrors((prevState) => ({
				...prevState,
				username: '*Por favor, informe o usuário.',
			}));
		}

		if (!isPristine && formData.password === '') {
			setErrors((prevState) => ({
				...prevState,
				password: '*Por favor, informe a senha.',
			}));
		}
	}, [formData, isPristine]);

	// Checks if form is pristine and has errors
	useEffect(() => {
		const hasErrors = !!Object.values(errors).filter(
			(item) => item !== undefined,
		).length;

		setIsValid(!isPristine && !hasErrors);
	}, [errors, isPristine]);

	// Checking information after submitting form
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		setIsSubmitted(true);

		// Find user login info
		const userData = database.find((user) => user.username === username);

		if (userData) {
			// Login success
			setLoginSuccess(userData.password === password);
		} else {
			// Login fail
			setLoginSuccess(false);
		}
	};

	// Clear form
	const clearForm = () => {
		setFormData(initialValues);
		setErrors(initialValues);
	};

	// On submit result
	useEffect(() => {
		if (isSubmitted) {
			if (!loginSuccess) {
				clearForm();
				setFormData(initialValues);
			} else {
				setIsAuthorized(true);
			}
		}
	}, [isSubmitted, loginSuccess]);

	// Validation callback
	useEffect(() => {
		if (isPristine && isSubmitted) {
			setIsSubmitted(false);
		}
		formValidation();
		handlePristine();
	}, [formData]);

	return (
		<div className="form">
			<form method="post" name="loginForm" onSubmit={handleSubmit}>
				<InputContainer
					id="user"
					dataTestId="username-input"
					inputType="text"
					label="Usuário"
					name="username"
					value={username}
					isRequired
					errorHandler={renderErrorMessage('username')}
					onChange={handleChange}
				/>

				<InputContainer
					id="pass"
					dataTestId="password-input"
					inputType="password"
					label="Senha"
					name="password"
					value={password}
					isRequired
					errorHandler={renderErrorMessage('password')}
					onChange={handleChange}
				/>

				<Button
					dataTestId="submit-button"
					text="Entrar"
					isDisabled={!isValid}
				/>
			</form>

			{isSubmitted && !loginSuccess && isPristine && (
				<div className="error text-center">
					Autenticação inválida. Tente novamente.
				</div>
			)}
		</div>
	);
}
