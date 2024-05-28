import {
	ProductPageContainer,
	ShopPageContainer,
} from '@/page-styles/shop/styles';
import SectionTitle from '@/components/titles/section-title';
import React from 'react';
import { useParams } from 'next/navigation';
import ShopItemDisplay from '@/components/shop/shop-item-display';
import shopItemsList from '@/objects/shop/shop-items-list';

const ProductItemPage = () => {
	const params = useParams<{ id: string }>();

	if (!params) return;

	const shopItem = shopItemsList.find(
		(x) => x.name.replaceAll(' ', '-').toLowerCase() == params.id
	)!!;

	return (
		<ProductPageContainer>
			<SectionTitle title={params.id.replaceAll('-', ' ')} />
			<ShopItemDisplay {...shopItem} />
		</ProductPageContainer>
	);
};

export default ProductItemPage;
