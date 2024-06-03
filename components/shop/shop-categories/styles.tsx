'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const ShopCategoriesContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	@media screen and (max-width: 800px) {
		display: none;
	}
`;

export const CategoryText = styled.p`
	font-size: 2rem;
	letter-spacing: 0.2rem;
	margin: 0;
	font-family: kalmansk;
`;

export const CategoryDivider = styled.div`
	height: 1px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
	margin-bottom: 10px;
`;

export const CategoriesContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	gap: 5px;

	justify-content: start;

	padding-left: 30px;
`;

export const CategoryLink = styled(Link)`
	text-decoration: underline;
	min-width: 150px;

	&:hover {
		color: ${({ theme }) => theme.colors.secondary};
	}
`;

export const ClearFilterLink = styled(CategoryLink)`
	&:hover {
		text-decoration: line-through;
	}
`;
