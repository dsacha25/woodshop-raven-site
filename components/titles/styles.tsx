import styled from 'styled-components';

export const SectionTitleContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	place-items: center;

	@media (max-width: 600px) {
		/* width: 100vw; */
	}
`;

export const SectTitle = styled.h2`
	text-transform: uppercase;
	font-size: 4rem;
	letter-spacing: 0.5rem;
	margin: 0;
	font-weight: 400;
	text-align: center;

	@media (max-width: 1250px) {
		font-size: 3rem;
	}

	@media (max-width: 900px) {
		font-size: 1.8rem;
		letter-spacing: 0.2rem;
	}
`;
