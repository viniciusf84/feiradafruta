import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as routes from '../config/routes';
import { GlobalStyle } from '../styles/globalStyle';

// context
import { ShopContextProvider } from '../contexts/ShopContext';

// views
import Login from '../views/Login/Login';
import Home from '../views/Home';
import Error404 from '../views/Error404';

export default function App() {
	const isAuthorized = true;

	return (
		<BrowserRouter>
			<ShopContextProvider>
				<GlobalStyle />
				<Routes>
					{/* <Route path={'/'} element={isAuthorized ? <Home /> : <Login />} /> */}
					<Route path={routes.LOGIN} element={<Login />} />
					<Route path={routes.HOME} element={<Home />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</ShopContextProvider>
		</BrowserRouter>
	);
}
