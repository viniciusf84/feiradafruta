import { useMemo, useContext } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// components
import CartButton from '../../components/CartButton';
import Image from '../../components/Image';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// styles
import { CartItem, TotalSection } from './Cart.styled';
import { CartProps } from '../../utils/types';

export default function Cart({ items, total }: CartProps) {
	const shopContext = useContext(ShopContext);

	const { setCheckout } = shopContext;

	const displayCart = useMemo(() => {
		return items.map((listItem) => (
			<CartItem key={listItem.item.name}>
				<Image src={listItem.item.image} alt={listItem.item.name} />

				<div className="text">
					<h3 className="title">{listItem.item.name.toUpperCase()}</h3>

					<div className="space-between">
						<span className="quantity">Quantidade: {listItem.quantity}</span>

						<strong className="price">${listItem.item.price}</strong>
					</div>
				</div>
			</CartItem>
		));
	}, [items]);

	return (
		items &&
		items.length > 0 && (
			<>
				{displayCart}

				<TotalSection>
					<div>
						<span>Total:</span> <strong>${total}</strong>
					</div>

					<CartButton
						text="Checkout"
						icon={faCheck}
						action={() => setCheckout(true)}
					/>
				</TotalSection>
			</>
		)
	);
}
