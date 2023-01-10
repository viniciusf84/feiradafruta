import { FormEvent } from 'react';
import { Container } from './InputContainer.styled';

interface InputContainerProps {
	id: string;
	dataTestId: string;
	inputType: string;
	label: string;
	name: string;
	value: string | undefined;
	isRequired: boolean;
	errorHandler: undefined | JSX.Element;
	onChange: (event: FormEvent<HTMLInputElement>) => void;
}

const InputContainer = ({
	id,
	dataTestId,
	inputType,
	label,
	name,
	value,
	isRequired,
	errorHandler,
	onChange,
}: InputContainerProps) => {
	return (
		<Container>
			<label htmlFor={id}>
				<span>{label}</span>
				<input
					id={id}
					data-testid={dataTestId}
					type={inputType}
					name={name}
					value={value || ''}
					required={isRequired}
					onChange={(e) => onChange(e)}
				/>
			</label>
			{errorHandler}
		</Container>
	);
};

export default InputContainer;
