import styled from 'styled-components';

export const PortfolioPageContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	margin-bottom: 400px;
	gap: 30px;

	@media screen and (max-width: 700px) {
		margin-bottom: 100px;
	}
`;

export const PortfolioContentContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 100px;
`;
