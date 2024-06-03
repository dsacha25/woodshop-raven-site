import React from 'react';
import ShopItemCard from '@/components/shop/shop-item-card';
import SectionTitle from '@/components/titles/section-title';
import shopItemsList from '@/objects/shop/shop-items-list';
import {
	ShopContentWrapper,
	ShopFilterContainer,
	ShopList,
	ShopPageContainer,
} from '@/app/shop/styles';
import _ from 'lodash';
import ClearFilter from '@/components/shop/clear-filter';

const ProductCategoryPage = ({ params }: { params: { category: string } }) => {
	const shopItemsByCategory = _.filter(shopItemsList, function (item) {
		return item.category.includes(params.category);
	});

	return (
		<ShopPageContainer>
			<SectionTitle title={params.category.replaceAll('-', ' ')} width="100%" />
			<ShopContentWrapper>
				<ShopList>
					{shopItemsByCategory.map((item, i) => (
						<ShopItemCard key={i} {...item} />
					))}
				</ShopList>
				<ClearFilter category={params.category} />
			</ShopContentWrapper>
		</ShopPageContainer>
	);
};

export default ProductCategoryPage;
