import { ProductPageContainer, ShopPageContainer } from '@/app/shop/styles';
import SectionTitle from '@/components/titles/section-title';
import React from 'react';
import ShopItemDisplay from '@/components/shop/shop-item-display';
import shopItemsList from '@/objects/shop/shop-items-list';

const ProductItemPage = ({
	params,
}: {
	params: { category: string; id: string };
}) => {
	const shopItem = shopItemsList.find(
		(x) => x.name.replaceAll(' ', '-').toLowerCase() == params.id
	);

	if (!shopItem) return;

	return (
		<ProductPageContainer>
			<SectionTitle title={params.id.replaceAll('-', ' ')} />
			<ShopItemDisplay {...shopItem} />
		</ProductPageContainer>
	);
};

export default ProductItemPage;
