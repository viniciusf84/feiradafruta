import { createContext, FC, PropsWithChildren } from 'react';
import useLocalState from '../utils/useLocalState';
import { LoginProps } from '../utils/types';

const LoginContext = createContext<LoginProps>({ isAuthorized: false });

const LoginContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isAuthorized, setIsAuthorized] = useLocalState('authorized', false);

	const state = {
		isAuthorized,
	};

	const actions = {
		setIsAuthorized,
	};

	return (
		<LoginContext.Provider value={{ ...state, ...actions }}>
			{children}
		</LoginContext.Provider>
	);
};

export { LoginContext, LoginContextProvider };
