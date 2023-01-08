import React, {
	useContext,
	useCallback,
	useState,
	useEffect,
	useMemo,
	useRef,
} from 'react';
import { useNavigate } from 'react-router';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// components
import SearchInput from '../../components/SearchInput';
import LoadingContent from '../../components/LoadingContent';
import Image from '../../components/Image';

// service
import { getPokemonByName } from '../../services';

// styles
import { SearchResults, SearchItem } from './Search.styled';

export default function Search() {
	const [isLoading, setIsLoading] = useState(false);
	const [search, setSearch] = useState(null);
	const [result, setResult] = useState(null);
	const [display, setDisplay] = useState(false);

	const shopContext = useContext(ShopContext);
	const { setSelectedPokemon } = shopContext.actions;

	const navigate = useNavigate();

	const searchResultsRef = useRef(null);

	const getSearchResults = useCallback(async (str) => {
		setIsLoading(true);
		try {
			const response = await getPokemonByName(str);

			setResult(response.data);
		} catch (error) {
			setResult(undefined);
			console.error(error);
		}
		setIsLoading(false);
	}, []);

	const onSetNewSearch = useCallback((value) => {
		setSearch(value);
		getSearchResults(value.toLowerCase());
	}, []);

	const getImage = useMemo(() => {
		return GetImageUrl(result);
	}, [result]);

	const selectItem = useCallback((data) => {
		setSelectedPokemon(data);
		navigate(`/profile/${data.name}`);

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
		if (search) {
			setDisplay(true);
		}
	}, [search]);

	return (
		<>
			<SearchInput
				name="search-input"
				placeholder="Search for your favorite pokemon"
				onSearch={(e) => onSetNewSearch(e)}
			/>

			{display && (
				<SearchResults
					data-testid="search-results"
					ref={searchResultsRef}
					style={{ justifyContent: isLoading ? 'center' : 'flex-start' }}
				>
					<LoadingContent
						isLoading={isLoading}
						loadingText={`Searching for ${search}`}
					>
						<>
							{result && (
								<SearchItem
									onClick={() => selectItem({ ...result, image: getImage })}
									tabIndex="0"
								>
									<Image src={getImage} alt={result.name} />

									<p>{result.name}</p>
								</SearchItem>
							)}
							{result === undefined && <p>{search} not found.</p>}
						</>
					</LoadingContent>
				</SearchResults>
			)}
		</>
	);
}
