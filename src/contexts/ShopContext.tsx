import {
	useState,
	createContext,
	useEffect,
	FC,
	PropsWithChildren,
} from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalState from '../utils/useLocalState';
import { ShopContextProps, FruitProps } from '../utils/types';

// services
import { fetchProducts } from '../services/products';

// routes
import { HOME } from '../config/routes';

const ShopContext = createContext<ShopContextProps>(null);

const ShopContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [shopData, setShopData] = useLocalState('data', []);
	const [search, setSearch] = useLocalState('search', null);
	const [selectedItem, setSelectedItem] = useLocalState('selected', null);
	const [message, setMessage] = useLocalState('message', '');
	const [cart, setAddToCart] = useLocalState('cart', []);
	const [displayToast, setDisplayToast] = useState(false);
	const [total, setTotal] = useLocalState('total', 0);
	const [checkout, setCheckout] = useState(false);
	const [resetCart, setResetCart] = useState(false);

	const state = {
		isLoading,
		shopData,
		selectedItem,
		message,
		cart,
		search,
		displayToast,
		total,
		checkout,
		resetCart,
	};

	const actions = {
		setIsLoading,
		setShopData,
		setSelectedItem,
		setMessage,
		setSearch,
		setAddToCart,
		setDisplayToast,
		setTotal,
		setCheckout,
		setResetCart,
	};

	const navigate = useNavigate();
	// Fetching fruit data
	useEffect(() => {
		async function handleFetchProducts() {
			setIsLoading(true);

			try {
				const response = await fetchProducts();
				setShopData(response);
			} catch (err) {
				console.log(err);
			}

			setIsLoading(false);
		}

		handleFetchProducts();
	}, []);

	useEffect(() => {
		const getTotal = () => {
			const cartTotal = cart.reduce((total: number, current: FruitProps) => {
				return (total += current.price);
			}, 0);

			return cartTotal.toFixed(2);
		};

		setTotal(getTotal());
	}, [cart]);

	useEffect(() => {
		if (checkout) {
			setAddToCart([]);
			setTotal(0);
			setResetCart(true);
			setResetCart(false);
			setSelectedItem(null);
			navigate(HOME);
		}
	}, [checkout]);

	return (
		<ShopContext.Provider value={{ ...state, ...actions }}>
			{children}
		</ShopContext.Provider>
	);
};

export { ShopContext, ShopContextProvider };
