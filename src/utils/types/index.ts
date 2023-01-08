import { Dispatch, SetStateAction, ReactNode } from 'react';

export interface FruitProps {
	id: number;
	name: string;
	price: number;
	image: string;
}

export interface ShopContextProps {
	children?: ReactNode;
	message: string;
	isLoading: boolean;
	shopData: FruitProps[];
	selectedItem: FruitProps;
	cart: FruitProps[];
	displayToast: boolean;
	total: number;
	checkout: boolean;
	resetCart: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setShopData: () => void;
	setSelectedFruit: () => void;
	setMessage: () => void;
	setAddToCart: () => void;
	setDisplayToast: Dispatch<SetStateAction<boolean>>;
	setTotal: Dispatch<SetStateAction<number>>;
	setCheckout: Dispatch<SetStateAction<boolean>>;
	setResetCart: Dispatch<SetStateAction<boolean>>;
}
