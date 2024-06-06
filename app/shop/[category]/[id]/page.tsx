import { ProductPageContainer, ShopPageContainer } from '@/app/shop/styles';
import SectionTitle from '@/components/titles/section-title';
import React from 'react';
import ShopItemDisplay from '@/components/shop/shop-item-display';
import shopItemsList from '@/objects/shop/shop-items-list';
import { Metadata } from 'next';

interface Param {
	category: string;
	id: string;
}

interface Props {
	params: { category: string; id: string };
}

export function generateMetadata({ params }: Props): Metadata {
	return {
		title: params.id,
	};
}

export const generateStaticParams = () => {
	return shopItemsList.map<Param>((item) => {
		return {
			category: item.category[0],
			id: item.name.replaceAll(' ', '-').toLowerCase(),
		};
	});
};

const ProductItemPage = ({ params }: Props) => {
	const shopItem = shopItemsList.find(
		(x) => x.name.replaceAll(' ', '-').toLowerCase() == params.id
	);

	console.log('PRODUCT PAGE: ', params);

	if (!shopItem) return;

	return (
		<ProductPageContainer>
			<SectionTitle title={params.id.replaceAll('-', ' ')} />
			<ShopItemDisplay {...shopItem} />
		</ProductPageContainer>
	);
};

export default ProductItemPage;
