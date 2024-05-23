import SectionTitle from '@/components/titles/section-title';
import { ShopPageContainer } from '@/page-styles/shop/styles';
import React from 'react';

type Props = {};

const ProductItemPage = ({ params }) => {
	return (
		<ShopPageContainer>
			<SectionTitle title={params.id} />
		</ShopPageContainer>
	);
};

export default ProductItemPage;
