import React from 'react';
import ShopItem from '@/components/shop/shop-item';
import SectionTitle from '@/components/titles/section-title';
import shopItemsList from '@/objects/shop/shop-items-list';
import {
	ShopContentWrapper,
	ShopFilterContainer,
	ShopList,
	ShopPageContainer,
} from '@/app/shop/styles';
import _ from 'lodash';

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
						<ShopItem key={i} {...item} />
					))}
				</ShopList>
				<ShopFilterContainer></ShopFilterContainer>
			</ShopContentWrapper>
		</ShopPageContainer>
	);
};

export default ProductCategoryPage;
