import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as routes from '../config/routes';
import { GlobalStyle } from '../styles/globalStyle';

// context
import { ShopContextProvider } from '../contexts/ShopContext';
import { LoginContextProvider } from '../contexts/LoginContext';

// views
import Login from '../views/Login/Login';
import Home from '../views/Home';
import Error404 from '../views/Error404';
import Profile from '../views/Profile';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App() {
	const isAuthorized = true;

	return (
		<BrowserRouter>
			<LoginContextProvider>
				<ShopContextProvider>
					<GlobalStyle />
					{isAuthorized && <Header pageTitle="Feira da Fruta" />}
					<Routes>
						{/* <Route path={'/'} element={isAuthorized ? <Home /> : <Login />} /> */}
						<Route path={routes.LOGIN} element={<Login />} />
						<Route path={routes.HOME} element={<Home />} />
						<Route path="*" element={<Error404 />} />
						<Route path={routes.PROFILE} element={<Profile />} />
					</Routes>
					<Footer
						text={`Feira da Fruta ${new Date().getFullYear()} - Tem até a jaca do meu bem`}
					/>
				</ShopContextProvider>
			</LoginContextProvider>
		</BrowserRouter>
	);
}
