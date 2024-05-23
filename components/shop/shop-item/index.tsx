import React from 'react';
import {
	AddToCartIcon,
	DetailsContainer,
	HorizontalDivider,
	ItemInfoContainer,
	ItemName,
	ItemStatus,
	ItemStatusContainer,
	ShopItemContainer,
	ShopItemImage,
	ShopItemImageContainer,
	VerticalDivider,
} from './styles';
import { IconButton } from '../../buttons/styles';

import arrowRight from '@/public/images/icons/arrow-right.svg';
import { ShopItemProps } from '@/objects/shop/shop-items-list';
import { useParams, useRouter } from 'next/navigation';

const ShopItem = ({
	src,
	name,
	category,
	url,
	price,
	stock,
}: ShopItemProps) => {
	const router = useRouter();

	const handleRoute = (url: string) => {
		router.push(url);
	};

	return (
		<ShopItemContainer>
			<ShopItemImageContainer>
				<ShopItemImage src={src} alt={name} />
			</ShopItemImageContainer>
			<DetailsContainer>
				<ItemName>{name}</ItemName>
				<ItemInfoContainer>
					<ItemStatusContainer>
						<ItemStatus>${price}.00 </ItemStatus>
						<HorizontalDivider />
						<ItemStatus> {stock > 0 ? stock : 'sold out'}</ItemStatus>
					</ItemStatusContainer>
					<VerticalDivider />
					<IconButton onClick={() => handleRoute(`/shop${url}`)}>
						<AddToCartIcon src={arrowRight} alt="Add to addToCart" />
					</IconButton>
				</ItemInfoContainer>
			</DetailsContainer>
		</ShopItemContainer>
	);
};

export default ShopItem;
