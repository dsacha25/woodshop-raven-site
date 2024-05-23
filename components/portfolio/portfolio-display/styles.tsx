import Image from 'next/image';
import styled from 'styled-components';
import { SolidButton } from '../../buttons/styles';

export const PortfolioDisplayContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 700px) {
		width: 100vw;
	}
`;

export const ImageGrid = styled.div`
	display: grid;
	height: auto;
	width: 100%;
	grid-template: 1fr 1fr / auto auto;
	position: relative;
	overflow: hidden;

	@media screen and (max-width: 700px) {
		display: flex;
		flex-direction: column;
		width: 100vw;
	}
`;

export const ImagesGradient = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	pointer-events: none;
	background: linear-gradient(
		90deg,
		rgba(35, 31, 32, 1) 0%,
		rgba(35, 31, 32, 0) 25%,
		rgba(35, 31, 32, 0) 75%,
		rgba(35, 31, 32, 1) 100%
	);
	z-index: 2;
`;

export const PortfolioImageWrapper = styled.div`
	width: 50vw;
	height: 100%;
	aspect-ratio: 2;
	overflow: hidden;
	position: relative;

	@media screen and (max-width: 700px) {
		width: 100vw;
	}
`;

export const PortfolioImage = styled(Image)`
	width: 100%;
	height: auto;
	position: absolute;
`;

export const PortfolioContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: start;
	align-items: end;
	padding: 30px 12vw 5vh;
	gap: 150px;

	@media screen and (max-width: 700px) {
		gap: 50px;
	}
`;

export const PortfolioButton = styled(SolidButton)`
	min-width: 300px;
	font-size: 1.2rem;

	@media screen and (min-width: 700px) {
		margin: unset !important;
	}

	@media screen and (max-width: 700px) {
		width: 100%;
		margin-top: 40px;
	}
`;
