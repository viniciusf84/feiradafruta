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
		<Details id="details">
			<section className="profile">
				{selectedItem ? (
					<div className="wrapper container-fluid">
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
									<span>Em até 6x no cartão</span>
								</div>

								<br />

								<hr />

								<CartButton
									text="Comprar"
									icon={faShoppingCart}
									action={() =>
										setAddToCart((prevState) => [...cart, selectedItem])
									}
								/>
							</div>
						</div>

						<Link className="back" to="/home">
							<FontAwesomeIcon icon={faArrowLeft} />
							Voltar para a loja
						</Link>
					</div>
				) : null}
			</section>
		</Details>
	);
}
