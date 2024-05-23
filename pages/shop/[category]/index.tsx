import SectionTitle from '@/components/titles/section-title';
import { ShopPageContainer } from '@/page-styles/shop/styles';
import React from 'react';

type Props = {};

const ProductCategoryPage = ({ params }: { params: { category: string } }) => {
	return (
		<ShopPageContainer>
			<SectionTitle title={''} />
		</ShopPageContainer>
	);
};

export default ProductCategoryPage;
