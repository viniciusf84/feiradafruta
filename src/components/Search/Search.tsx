import { useContext, useCallback, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

// routes
import { PROFILE } from '../../config/routes';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// types
import { FruitProps } from '../../utils/types';

// components
import SearchInput from '../../components/SearchInput';
import LoadingContent from '../../components/LoadingContent';
import Image from '../../components/Image';

// styles
import { SearchResults, SearchItem } from './Search.styled';

export default function Search() {
	const [isLoading, setIsLoading] = useState(false);
	const [result, setResult] = useState<FruitProps[] | null>(null);
	const [display, setDisplay] = useState(false);

	const shopContext = useContext(ShopContext);
	const { setSelectedItem, shopData, search, setSearch } = shopContext;

	const navigate = useNavigate();

	const searchResultsRef = useRef(null);

	const getSearchResults = useCallback((str: string) => {
		setSearch(str);

		const searchData = shopData.filter(
			(item) =>
				item.slug ===
				str
					.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
					.toLowerCase(),
		);

		console.log(searchData);

		setResult(searchData);
	}, []);

	const selectItem = useCallback((data: FruitProps) => {
		navigate(PROFILE);
		setSelectedItem(data);

		// closes the search result section
		setDisplay(false);
		setSearch('');
	}, []);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			searchResultsRef.current &&
			!searchResultsRef.current.contains(event.target)
		) {
			setDisplay(false);
			setSearch(null);
		}
	};

	const onEscPressed = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			setDisplay(false);
			setSearch(null);
		}
	};

	useEffect(() => {
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', onEscPressed, false);

		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', onEscPressed, false);
		};
	}, [searchResultsRef]);

	useEffect(() => {
		if (result) {
			setDisplay(true);
		}
	}, [result]);

	return (
		<>
			<SearchInput
				name="search-input"
				placeholder="Tinha laranja, morango e banana..."
				onSearch={(e: string) => getSearchResults(e)}
			/>

			{display && (
				<SearchResults
					data-testid="search-results"
					ref={searchResultsRef}
					style={{ justifyContent: isLoading ? 'center' : 'flex-start' }}
				>
					<LoadingContent
						isLoading={isLoading}
						loadingText={`Procurando por ${search}`}
					>
						{result && result.length > 0 ? (
							<SearchItem tabIndex={0} onClick={() => selectItem(result[0])}>
								<Image src={result[0].image} alt={result[0].name} />

								<p>{result[0].name}</p>
							</SearchItem>
						) : (
							<p>Não encontramos {search} na Feira da Fruta.</p>
						)}
					</LoadingContent>
				</SearchResults>
			)}
		</>
	);
}
