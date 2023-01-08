import {
	useState,
	createContext,
	useEffect,
	FC,
	PropsWithChildren,
} from 'react';
import useLocalState from '../utils/useLocalState';
import { ShopContextProps, FruitProps } from '../utils/types';
// service
import api from '../services/api';

const ShopContext = createContext<ShopContextProps>(null);

const ShopContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [shopData, setShopData] = useLocalState('data', []);
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
		displayToast,
		total,
		checkout,
		resetCart,
	};

	const actions = {
		setIsLoading,
		setShopData,
		setSelectedFruit: setSelectedItem,
		setMessage,
		setAddToCart,
		setDisplayToast,
		setTotal,
		setCheckout,
		setResetCart,
	};

	// Fetching fruit data
	useEffect(() => {
		async function getApiData(obj: FruitProps[]) {
			setIsLoading(true);

			try {
				const response = await new Promise((resolve) =>
					setTimeout(() => resolve(obj), 2000),
				);
				setShopData(response);
			} catch (err) {
				console.log(err);
			}

			setIsLoading(false);
		}

		getApiData(api);
	}, []);

	useEffect(() => {
		const getTotal = () => {
			const cartTotal = cart.reduce(function (
				total: number,
				current: FruitProps,
			) {
				return total + current.price;
			},
			0);

			return cartTotal;
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
		}
	}, [checkout]);

	return (
		<ShopContext.Provider value={{ ...state, ...actions }}>
			{children}
		</ShopContext.Provider>
	);
};

export { ShopContext, ShopContextProvider };