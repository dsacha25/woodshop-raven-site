'use client';
import styled from 'styled-components';

export const ShopPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 50px;
	width: 100%;
	padding: 0 10vw;
`;

export const ProductPageContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 200px;
`;

export const ShopContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 20px;

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`;

export const ShopFilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: black;
`;

export const ShopList = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
	grid-template-columns: repeat(3, 1fr);
	gap: 50px 25px;

	@media screen and (max-width: 1300px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
