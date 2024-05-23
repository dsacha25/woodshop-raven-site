import React from 'react';
import {
	CategoriesContainer,
	CategoryDivider,
	CategoryLink,
	CategoryText,
	ShopCategoriesContainer,
} from './styles';

const ShopCategories = () => {
	const allFilters: string[] = [
		'boxes',
		'incense',
		'pipes',
		'games',
		'kink',
		'woodburning',
		'made-to-order',
	];

	return (
		<ShopCategoriesContainer>
			<CategoryText>Categories</CategoryText>
			<CategoryDivider />
			<CategoriesContainer>
				{allFilters.map((filter, i) => (
					<CategoryLink key={i} href={`shop/${filter}`}>
						{filter.replaceAll('-', ' ')}
					</CategoryLink>
				))}
			</CategoriesContainer>
		</ShopCategoriesContainer>
	);
};

export default ShopCategories;
