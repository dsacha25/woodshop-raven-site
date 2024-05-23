import styled from 'styled-components';

export const ShopItemDisplayContainer = styled.div`
	display: flex;
	/* flex-direction: column; */
	height: 100%;
	/* min-height: 100vh; */
	width: 100%;

	align-items: stretch;
	/* justify-content: start; */

	margin-bottom: 50vh;
	gap: 100px;
`;

export const ShopDetails = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	height: auto;
`;

export const ItemText = styled.p`
	font-size: 2rem;
`;
