import { Main } from '@/components/sharedstyles';
import React from 'react';
import { ShopList, ShopPageContainer } from '../../page-styles/shop/styles';
import SectionTitle from '@/components/titles/section-title';
import shopItemsList from '@/objects/shop/shop-items-list';
import ShopItem from '@/components/shop-item';

const Shop = () => {
	return (
		<ShopPageContainer>
			<SectionTitle title="Shop" width="100%" />
			<ShopList>
				{shopItemsList.map((item, i) => (
					<ShopItem key={i} {...item} />
				))}
			</ShopList>
		</ShopPageContainer>
	);
};

export default Shop;
