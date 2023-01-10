import { useEffect, createContext, FC, PropsWithChildren } from 'react';
import useLocalState from '../utils/useLocalState';
// routes
import { useNavigate } from 'react-router-dom';
import { LOGIN, HOME } from '../config/routes';

import { LoginProps } from '../utils/types';

const LoginContext = createContext<LoginProps>(null);

const LoginContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isAuthorized, setIsAuthorized] = useLocalState('authorized', false);

	const navigate = useNavigate();

	const state = {
		isAuthorized,
	};

	const actions = {
		setIsAuthorized,
	};

	// redirects user on login
	useEffect(() => {
		if (isAuthorized) {
			navigate(HOME);
		} else {
			navigate(LOGIN);
		}
	}, [isAuthorized]);

	return (
		<LoginContext.Provider value={{ ...state, ...actions }}>
			{children}
		</LoginContext.Provider>
	);
};

export { LoginContext, LoginContextProvider };
