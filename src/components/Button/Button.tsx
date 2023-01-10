import { ButtonContainer, SubmitButton } from './Button.styled';

interface ButtonProps {
	dataTestId: string;
	text: string;
	isDisabled: boolean;
}

const Button = ({ dataTestId, text, isDisabled }: ButtonProps) => {
	return (
		<ButtonContainer>
			<SubmitButton
				data-testid={dataTestId}
				type="submit"
				disabled={isDisabled}
			>
				{text}
			</SubmitButton>
		</ButtonContainer>
	);
};

export default Button;
