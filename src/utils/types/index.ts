import { Dispatch, SetStateAction, ReactNode } from 'react';

export interface LoginProps {
	isAuthorized: boolean;
	setIsAuthorized: Dispatch<SetStateAction<boolean>>;
}
export interface FruitProps {
	id: number;
	name: string;
	slug: string;
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
	search: string;
	checkout: boolean;
	resetCart: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setShopData: () => void;
	setSelectedItem: () => void;
	setMessage: () => void;
	setAddToCart: () => void;
	setSearch: () => void;
	setDisplayToast: Dispatch<SetStateAction<boolean>>;
	setTotal: Dispatch<SetStateAction<number>>;
	setCheckout: Dispatch<SetStateAction<boolean>>;
	setResetCart: Dispatch<SetStateAction<boolean>>;
}
