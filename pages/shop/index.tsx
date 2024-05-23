import { Main } from '@/components/sharedstyles';
import React, { useState } from 'react';
import {
	ShopContentWrapper,
	ShopFilterContainer,
	ShopList,
	ShopPageContainer,
} from '../../page-styles/shop/styles';
import SectionTitle from '@/components/titles/section-title';
import shopItemsList from '@/objects/shop/shop-items-list';
import ShopItem from '@/components/shop/shop-item';
import ShopFilter from '@/components/shop/shop-filter';
import _ from 'lodash';
import ShopCategories from '@/components/shop/shop-categories';

const Shop = () => {
	const [shopItems, setShopItems] = useState(shopItemsList);

	return (
		<ShopPageContainer>
			<SectionTitle title="Shop" width="100%" />
			<ShopContentWrapper>
				<ShopList>
					{shopItemsList.map((item, i) => (
						<ShopItem key={i} {...item} />
					))}
				</ShopList>
				<ShopCategories />
			</ShopContentWrapper>
		</ShopPageContainer>
	);
};

export default Shop;
