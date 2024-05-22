import Image from 'next/image';
import styled from 'styled-components';

export const AboutPageContainer = styled.div`
	height: 100%;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	position: relative;
	gap: 40px;
	margin-bottom: 100px;
`;

export const AboutContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	padding: 0 12vw;

	@media screen and (max-width: 700px) {
		padding: 0;
	}
`;

export const AboutImagesWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MobileSelfie = styled(Image)`
	height: auto;
	width: 100%;
	@media screen and (min-width: 700px) {
		display: none;
	}
`;

export const NameContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	/* justify-content: stretch; */
`;

export const NameText = styled.h2`
	width: auto;
	font-family: kalmansk;
	font-size: 3rem;
	text-align: right;
	margin: 0;
	margin-right: 20px;
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 3rem;
	text-indent: 50px;
	margin-bottom: 100px;

	place-self: center;

	max-width: 80vw;

	@media (max-width: 1250px) {
		font-size: 1.2rem;
		line-height: 2rem;
	}

	@media (max-width: 900px) {
		font-size: 1rem;
	}

	@media (max-width: 600px) {
		font-size: 0.8rem;
		line-height: 1.4rem;
	}
`;
