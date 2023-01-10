import users from './users';

interface FormProps {
	username?: string;
	password?: string;
}

export const auth = ({ username, password }: FormProps) => {
	return new Promise((resolve) => {
		function login() {
			const userData = users.find((user) => user.username === username);

			if (userData) {
				// Login success
				return !!(userData.password === password);
			} else {
				// Login fail
				return false;
			}
		}

		setTimeout(() => resolve(login()), 1000);
	});
};
