import React from 'react';
import { ShopContentWrapper, ShopList, ShopPageContainer } from './styles';
import SectionTitle from '@/components/titles/section-title';
import shopItemsList from '@/objects/shop/shop-items-list';
import ShopItem from '@/components/shop/shop-item';
import _ from 'lodash';
import ShopCategories from '@/components/shop/shop-categories';

const Shop = () => {
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
