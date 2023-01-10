import { useContext } from 'react';
// components
import SignOutButton from '../SignOutButton';
import { StyledFooter } from './Footer.styled';

//hooks
import { LoginContext } from '../../contexts/LoginContext';
interface FooterProps {
	text: string;
}

function Footer({ text }: FooterProps) {
	const loginContext = useContext(LoginContext);

	const { isAuthorized, setIsAuthorized } = loginContext;
	return (
		<>
			<SignOutButton
				action={() => setIsAuthorized(false)}
				isLogged={isAuthorized}
			></SignOutButton>

			{isAuthorized ? (
				<StyledFooter id="footer">
					<p>{text}</p>
				</StyledFooter>
			) : null}
		</>
	);
}

export default Footer;
