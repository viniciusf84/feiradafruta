import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// hooks
import { ShopContext } from '../../contexts/ShopContext';

// Components
import Image from '../../components/Image';
import CartButton from '../../components/CartButton';

// styles
import { Details } from './Profile.styled';

export default function Profile() {
	const shopContext = useContext(ShopContext);
	const { setAddToCart } = shopContext;
	const { cart, selectedItem } = shopContext;

	return (
		<section className="character-profile">
			<div className="wrapper container-fluid">
				{selectedItem ? (
					<Details>
						<div className="row">
							<div className="col col__info">
								<div className="image-wrapper">
									<Image src={selectedItem.image} alt={selectedItem.name} />
								</div>
							</div>

							<div className="col col__add">
								<h1>{selectedItem.name.toUpperCase()}</h1>

								<br />

								<div className="text">
									<p className="price">${selectedItem.price}</p>
									<span>Em até 10x no cartão</span>
								</div>

								<br />

								<hr />

								<CartButton
									text="Buy"
									icon={faShoppingCart}
									action={() =>
										setAddToCart((prevState) => [
											...prevState.cart,
											selectedItem,
										])
									}
								/>
							</div>
						</div>

						<Link className="back" to="/">
							<FontAwesomeIcon icon={faArrowLeft} />
							Back to shop
						</Link>
					</Details>
				) : (
					<Details>
						<p>No results.</p>
						<Link className="back" to="/">
							<FontAwesomeIcon icon={faArrowLeft} /> Back
						</Link>
					</Details>
				)}
			</div>
		</section>
	);
}
