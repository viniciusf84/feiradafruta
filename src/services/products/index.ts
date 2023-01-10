// service
import products from './products';

export const fetchProducts = () => {
	return new Promise((resolve) => setTimeout(() => resolve(products), 2000));
};
