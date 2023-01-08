import { ButtonContainer, SubmitButton } from './Button.styled';

interface ButtonProps {
	text: string;
	isDisabled: boolean;
}

const Button = ({ text, isDisabled }: ButtonProps) => {
	return (
		<ButtonContainer>
			<SubmitButton type="submit" disabled={isDisabled}>
				{text}
			</SubmitButton>
		</ButtonContainer>
	);
};

export default Button;
