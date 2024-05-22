import { StaticImageData } from 'next/image';
import React from 'react';
import {
	AddToCartIcon,
	DetailsContainer,
	ItemName,
	ShopItemContainer,
	ShopItemImage,
	ShopItemImageContainer,
	VerticalDivider,
} from './styles';
import { IconButton } from '../buttons/styles';
import { CartIcon } from '../header/styles';

import addToCart from '../../public/images/icons/add_icon.svg';
import { ShopItemProps } from '@/objects/shop/shop-items-list';

const ShopItem = ({ src, name, category, url }: ShopItemProps) => {
	return (
		<ShopItemContainer>
			<ShopItemImageContainer>
				<ShopItemImage src={src} alt={name} />
			</ShopItemImageContainer>
			<DetailsContainer>
				<ItemName>{name}</ItemName>
				<VerticalDivider />
				<IconButton>
					<AddToCartIcon src={addToCart} alt="Add to addToCart" />
				</IconButton>
			</DetailsContainer>
		</ShopItemContainer>
	);
};

export default ShopItem;
