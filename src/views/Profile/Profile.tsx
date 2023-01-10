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
import { HOME } from '../../config/routes';

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

								<div className="text">
									<span>
										The standard Lorem Ipsum passage, used since the 1500s{' '}
									</span>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit
										esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
										occaecat cupidatat non proident, sunt in culpa qui officia
										deserunt mollit anim id est laborum.
									</p>
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

						<Link className="back" to={HOME}>
							<FontAwesomeIcon icon={faArrowLeft} />
							Voltar para a loja
						</Link>
					</div>
				) : null}
			</section>
		</Details>
	);
}
