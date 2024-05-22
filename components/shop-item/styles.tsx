import Image from 'next/image';
import styled from 'styled-components';

export const ShopItemContainer = styled.div`
	display: grid;
	width: 100%;
	height: auto;
	grid-template-rows: 1fr 65px;
	border-radius: 25px;

	border: 2px solid ${({ theme }) => theme.colors.primary};
	overflow: hidden;
`;

export const ShopItemImageContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	place-items: center;
	overflow: hidden;
`;

export const ShopItemImage = styled(Image)`
	width: 100%;
	height: auto;
`;

export const DetailsContainer = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: 1fr auto 100px;
	place-items: center start;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const ItemName = styled.p`
	font-size: 1.2rem;
	padding: 0;
	margin: 0;
	text-align: start;
	padding-left: 20px;

	color: ${({ theme }) => theme.colors.background};
`;

export const VerticalDivider = styled.div`
	width: 3px;
	height: 80%;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 10px;
`;

export const AddToCartIcon = styled(Image)`
	height: 44px;
	width: 43.5px;
	cursor: pointer;
`;
