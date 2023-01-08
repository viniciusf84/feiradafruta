import { FC } from 'react';
import { LoadingContentStyled } from './LoadingContent.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface LoadingContentProps {
	isLoading: boolean;
	loadingText: string;
	children: JSX.Element;
}

const LoadingContent = ({
	isLoading,
	loadingText,
	children,
}: LoadingContentProps) => {
	return isLoading ? (
		<LoadingContentStyled>
			<div className="loading-content__wrapper text-center">
				<p>{loadingText}</p>
				<FontAwesomeIcon icon={faSpinner} size="3x" className="spinner" />
			</div>
		</LoadingContentStyled>
	) : (
		children
	);
};

export default LoadingContent;
