import React from 'react';
import {
	CategoriesContainer,
	CategoryDivider,
	CategoryLink,
	CategoryText,
	ClearFilterLink,
	ShopCategoriesContainer,
} from '../shop-categories/styles';

type Props = {
	category: string;
};

const ClearFilter = (props: Props) => {
	return (
		<ShopCategoriesContainer>
			<CategoryText>Categories</CategoryText>
			<CategoryDivider />
			<CategoriesContainer>
				<ClearFilterLink href="/shop">{props.category}</ClearFilterLink>
			</CategoriesContainer>
		</ShopCategoriesContainer>
	);
};

export default ClearFilter;
