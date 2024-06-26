'use client';
import React from 'react';
import {
	CategoriesContainer,
	CategoryDivider,
	CategoryLink,
	CategoryText,
	ShopCategoriesContainer,
} from './styles';
import { getAnalytics, logEvent } from 'firebase/analytics';
import firebase from '@/app/lib/firebase';

const ShopCategories = () => {
	const allFilters: string[] = [
		'boxes',
		'incense',
		'charcuterie',
		'pipes',
		'games',
		'kink',
		'woodburning',
		'made-to-order',
	];

	const handleAnalytics = (category: string) => {
		console.log(category);
		logEvent(getAnalytics(firebase), 'view_item_list', {
			item_list_name: category,
		});
	};

	return (
		<ShopCategoriesContainer>
			<CategoryText>Categories</CategoryText>
			<CategoryDivider />
			<CategoriesContainer>
				{allFilters.map((filter, i) => (
					<CategoryLink
						onClick={() => handleAnalytics(filter)}
						key={i}
						href={`shop/${filter}`}
					>
						{filter.replaceAll('-', ' ')}
					</CategoryLink>
				))}
			</CategoriesContainer>
		</ShopCategoriesContainer>
	);
};

export default ShopCategories;
