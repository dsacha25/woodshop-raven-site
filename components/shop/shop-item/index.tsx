import React from 'react';
import {
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

import arrowRight from '@/public/images/icons/arrow-right.svg';
import { ShopItemProps } from '@/objects/shop/shop-items-list';
import IconLink from '@/components/buttons/icon-link/icon-link';

const ShopItem = ({ src, name, url, price, stock }: ShopItemProps) => {
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
					<IconLink url={`/shop${url}`} icon={arrowRight} />
				</ItemInfoContainer>
			</DetailsContainer>
		</ShopItemContainer>
	);
};

export default ShopItem;
