import SectionTitle from '@/components/titles/section-title';
import { ShopPageContainer } from '@/page-styles/shop/styles';
import React from 'react';

type Props = {};

const ProductCategoryPage = ({ params }: { params: { slug: string } }) => {
	return (
		<ShopPageContainer>
			<SectionTitle title={"params"} />
		</ShopPageContainer>
	);
};

export default ProductCategoryPage;
