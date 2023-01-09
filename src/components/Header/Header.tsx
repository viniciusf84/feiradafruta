import { useContext } from 'react';
import { Link } from 'react-router-dom';

// styles
import { HeaderStyled } from './Header.styled';

// components
import Search from '../Search';
import HeaderCart from '../HeaderCart';

// hook
import { ShopContext } from '../../contexts/ShopContext';

interface HeaderProps {
	pageTitle: string;
}

const Header = ({ pageTitle }: HeaderProps) => {
	const shopContext = useContext(ShopContext);
	const { cart, total } = shopContext;

	return (
		<>
			<HeaderStyled id="header">
				<div className="mobile">
					<div className="wrapper">
						<div className="brand start-xs">
							<Link to="/">{pageTitle}</Link>
						</div>

						<HeaderCart items={cart} total={total} />
					</div>

					<div className="search-wrapper">
						<Search />
					</div>
				</div>

				<div className="desktop">
					<div className="wrapper container-fluid">
						<div className="brand start-xs">
							<Link to="/">{pageTitle}</Link>
						</div>

						<div className="search-wrapper">
							<Search />
						</div>

						<HeaderCart items={cart} total={total} />
					</div>
				</div>
			</HeaderStyled>
		</>
	);
};

export default Header;
