import React, { useMemo, useContext } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

// components
import CartButton from '../../components/CartButton';
import Image from '../../components/Image';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// styles
import { CartItem, TotalSection } from './Cart.styled';

export default function Cart({ size, list, title, price, image, total }) {
	const shopContext = useContext(ShopContext);

	const { setCheckout } = shopContext.actions;

	const displayCart = useMemo(() => {
		return list.map((item) => (
			<CartItem key={item.item[title]}>
				<Image src={item.item[image]} alt={item.item[title]} />

				<div className="text">
					<h3 className="title">{item.item[title].toUpperCase()}</h3>

					<div className="space-between">
						<span className="quantity">Quantidade: {item.quantity}</span>

						<strong className="price">${item.item[price]}</strong>
					</div>
				</div>
			</CartItem>
		));
	}, [list]);

	return (
		list &&
		list.length > 0 && (
			<>
				{/* <Scrollbars style={{ height: 'calc(100% - 120px)' }}> */}
				{displayCart}
				{/* </Scrollbars> */}

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
