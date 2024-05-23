import Image from 'next/image';
import styled from 'styled-components';

export const ShopItemContainer = styled.div`
	display: grid;
	width: 100%;
	height: auto;
	grid-template-rows: 1fr 80px;
	border-radius: 30px;

	border: 2px solid ${({ theme }) => theme.colors.primary};
	box-shadow: 0 0 1px 0 ${({ theme }) => theme.colors.primary} inset,
		0 0 1px 0 ${({ theme }) => theme.colors.primary};
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
	grid-template-columns: 1fr auto 80px;
	place-items: center start;
	background-color: ${({ theme }) => theme.colors.primary};

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr auto auto;
	}
`;

export const ItemInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const ItemName = styled.p`
	font-size: 1.2rem;
	padding: 0;
	margin: 0;
	text-align: start;
	padding-left: 20px;

	color: ${({ theme }) => theme.colors.background};

	@media screen and (max-width: 800px) {
		font-size: 1rem;
	}
`;

export const ItemStatusContainer = styled.div`
	display: grid;
	grid-template-columns: auto auto 1fr;
	width: 100%;
	justify-content: center;
	align-items: center;
	padding-left: 20px;
	gap: 10px;
`;

export const ItemStatus = styled.p`
	font-size: 1rem;
	color: #b60009;

	@media screen and (max-width: 800px) {
		font-size: 0.8rem;
	}
`;

export const VerticalDivider = styled.div`
	width: 3px;
	height: 80%;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 10px;
`;

export const HorizontalDivider = styled.div`
	width: 20px;
	height: 2px;
	justify-self: center;
	border-radius: 3px;

	background-color: ${({ theme }) => theme.colors.background};
`;

export const AddToCartIcon = styled(Image)`
	height: 44px;
	width: 43.5px;
	cursor: pointer;
`;
