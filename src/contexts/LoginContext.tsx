import { useEffect, createContext, FC, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import useLocalState from '../utils/useLocalState';
// routes
import { useNavigate } from 'react-router-dom';
import * as routes from '../config/routes';

import { LoginProps } from '../utils/types';

const LoginContext = createContext<LoginProps>(null);

const LoginContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isAuthorized, setIsAuthorized] = useLocalState('authorized', false);

	const navigate = useNavigate();
	const location = useLocation();

	const state = {
		isAuthorized,
	};

	const actions = {
		setIsAuthorized,
	};

	// redirects user on login
	useEffect(() => {
		const isKnownLocation =
			Object.values(routes).indexOf(location.pathname) > -1;

		if (!isKnownLocation) return;

		if (isAuthorized) {
			navigate(routes.HOME);
		} else {
			navigate(routes.LOGIN);
		}
	}, [isAuthorized]);

	return (
		<LoginContext.Provider value={{ ...state, ...actions }}>
			{children}
		</LoginContext.Provider>
	);
};

export { LoginContext, LoginContextProvider };
