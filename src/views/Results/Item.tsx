// types
import { FruitProps } from '../../utils/types';

import Image from '../../components/Image';

function Item({ name, image, price }: FruitProps) {
	return (
		<div className="item">
			<div className="wrap  img__wrapper">
				<Image src={image} alt={name} />
			</div>

			<div className="text">
				<span className="title">{name}</span>

				{/* Base experience replaces price   */}
				<span className="price">${price}</span>
			</div>
		</div>
	);
}

export default Item;
