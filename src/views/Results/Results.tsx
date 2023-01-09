import { useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// routes
import { PROFILE } from '../../config/routes';

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
	const { isLoading, shopData, message, setSelectedItem } = shopContext;
	const navigate = useNavigate();

	const onSelectItem = (item: FruitProps) => {
		setSelectedItem(item);
		navigate(`${PROFILE}/${item.slug}`);
	};

	const displayFruitList = useCallback((shop: FruitProps[], title: string) => {
		if (shop && shop.length > 0) {
			return (
				<>
					<h1 className="page-title">O que a Feira da Fruta tem</h1>

					{shop.map((item: FruitProps) => (
						<Item
							key={item.id}
							id={item.id}
							name={item.name}
							image={item.image}
							price={item.price}
							onClick={() => onSelectItem(item)}
						/>
					))}
				</>
			);
		}

		return;
	}, []);

	return (
		<div className="wrapper container-fluid">
			<LoadingContent isLoading={isLoading} loadingText="Carregando conteúdo">
				<ResultList id="results">
					{displayFruitList(shopData, message)}
				</ResultList>
			</LoadingContent>
		</div>
	);
}

export default Results;
