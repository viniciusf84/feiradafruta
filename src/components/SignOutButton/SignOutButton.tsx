import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { SignOutButtonStyled } from './SignOutButton.styled';

interface SignOutProps {
	action: () => void;
	isLogged: boolean;
}

function SignOutButton({ action, isLogged }: SignOutProps) {
	return isLogged ? (
		<SignOutButtonStyled id="signout" onClick={action} title="Sair">
			<FontAwesomeIcon icon={faSignOut} />
		</SignOutButtonStyled>
	) : null;
}

export default SignOutButton;
