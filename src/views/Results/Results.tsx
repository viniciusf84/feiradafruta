import { useCallback, useContext } from 'react';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// components
import LoadingContent from '../../components/LoadingContent';
import Item from './Item';

// styles
import { ResultList } from './Results.styled';
import { FruitProps } from '../../utils/types';

function Results() {
	const shopContext = useContext(ShopContext);
	const { isLoading, shopData, message } = shopContext;

	const displayPokemonList = useCallback(
		(shop: FruitProps[], title: string) => {
			if (shop && shop.length > 0) {
				return (
					<>
						<h1 className="page-title">Feira da Fruta</h1>

						{shop.map((item: FruitProps) => (
							<Item
								key={item.id}
								id={item.id}
								name={item.name}
								image={item.image}
								price={item.price}
							/>
						))}
					</>
				);
			}

			return;
		},
		[],
	);

	return (
		<div className="wrapper container-fluid">
			<LoadingContent isLoading={isLoading} loadingText="Carregando conteúdo">
				<ResultList id="results">
					{displayPokemonList(shopData, message)}
				</ResultList>
			</LoadingContent>
		</div>
	);
}

export default Results;
