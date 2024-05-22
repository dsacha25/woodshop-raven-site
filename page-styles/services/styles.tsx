import Image from 'next/image';
import styled from 'styled-components';

export const ServicesPageContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 80px;
	margin-bottom: 400px;
`;

export const ServiceItemPage = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 200px;
`;

export const ServiceItemContentContainer = styled.div`
	display: grid;
	width: 100%;
	height: 1010px;
	max-height: 1010px;
	grid-template-columns: 55vw auto;

	@media screen and (max-width: 800px) {
		grid-template-rows: 100vw 1fr;
		grid-template-columns: 1fr;
		height: 100%;
		max-height: unset;
	}
`;

export const ServiceItemPhotoWrapper = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	position: relative;
	overflow: hidden;
	aspect-ratio: 1;
`;

export const ServicePhoto = styled(Image)`
	width: 100%;
	height: auto;
	position: absolute;

	@media screen and (max-width: 800px) {
		aspect-ratio: 1;
	}
`;

export const DescriptionContainer = styled.div`
	display: grid;
	grid-template-rows: 150px 1fr auto 80px;
	height: 100%;
	width: 100%;
	padding: 45px 4.5vw;
	place-items: center;
	gap: 40px;
`;

export const Icon = styled(Image)`
	width: 150px;
	height: auto;
	aspect-ratio: 1;
`;

export const TaglineWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 525px;
	justify-content: center;
`;

export const TaglineContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: black;
	align-items: center;
	justify-content: center;
`;

export const Tagline = styled.h2`
	font-size: 3rem;
	font-weight: 100;
	letter-spacing: 0.25rem;
	margin: 0;

	@media screen and (max-width: 800px) {
		font-size: 1.5rem;
		text-align: center;
	}
`;

export const Annotation = styled.p`
	font-family: kalmansk;
	font-size: 1.8rem;
`;

export const TestimonialsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	min-height: 1200px;
	justify-content: space-evenly;
	align-items: center;

	padding: 0 8vw;
`;

export const FullWidthContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
`;

export const TestimonyList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 150px;
`;
