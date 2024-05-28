import ShopItem from '@/components/shop/shop-item';
import SectionTitle from '@/components/titles/section-title';
import shopItemsList from '@/objects/shop/shop-items-list';
import {
	ShopContentWrapper,
	ShopFilterContainer,
	ShopList,
	ShopPageContainer,
} from '@/page-styles/shop/styles';
import _ from 'lodash';
import { useParams } from 'next/navigation';
import React from 'react';

const ProductCategoryPage = () => {
	const params = useParams<{ category: string }>();

	if (!params) return;

	const shopItemsByCategory = _.filter(shopItemsList, function (item) {
		return item.category.includes(params.category);
	});

	return (
		<ShopPageContainer>
			<SectionTitle title={params.category.replaceAll('-', ' ')} width="100%" />
			<ShopContentWrapper>
				<ShopList>
					{shopItemsByCategory.map((item, i) => (
						<ShopItem key={i} {...item} />
					))}
				</ShopList>
				<ShopFilterContainer></ShopFilterContainer>
			</ShopContentWrapper>
		</ShopPageContainer>
	);
};

export default ProductCategoryPage;
