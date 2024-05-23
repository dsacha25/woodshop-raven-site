import styled from 'styled-components';

export const ShopPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 50px;
	width: 100%;
	padding: 0 10vw;
`;

export const ShopList = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
	grid-template-columns: repeat(3, 1fr);
	gap: 100px 50px;

	@media screen and (max-width: 1300px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
