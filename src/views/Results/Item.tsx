// types
import { FruitProps } from '../../utils/types';

import Image from '../../components/Image';

interface ItemProps extends FruitProps {
	onClick: () => void;
}

function Item({ name, image, price, onClick }: ItemProps) {
	return (
		<div className="item" onClick={() => onClick()}>
			<div className="wrap  img__wrapper">
				<Image src={image} alt={name} />
			</div>

			<div className="text">
				<span className="title">{name}</span>
				<span className="price">R${price}</span>
			</div>
		</div>
	);
}

export default Item;
