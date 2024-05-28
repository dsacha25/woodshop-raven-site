import Image from 'next/image';
import styled, { css } from 'styled-components';
import RavenWings from '@/public/images/branding/WoodshopRaven_BG.webp';

export const HomePageContainer = styled.div``;

export const HeroSection = styled.div`
	height: 85vh;
	overflow-x: hidden;
	position: relative;
`;

export const BrandName = styled.h1`
	font-size: 3rem;
	text-transform: uppercase;
	letter-spacing: 0.25rem;
	font-weight: 400;
	height: min-content;

	color: ${({ theme }) => theme.colors.secondary};

	margin: 0;
	position: absolute;
	place-self: center;
	bottom: 0;
	top: 0;
	z-index: 5;

	width: 100%;
	text-align: center;

	background: radial-gradient(
		circle,
		rgba(35, 31, 32, 0.75) 0%,
		rgba(0, 0, 0, 0) 100%
	);

	@media screen and (max-width: 800px) {
		font-size: 2rem;
	}
`;

export const TagLineSection = styled.div`
	height: 700px;
	margin-top: -100px;

	@media screen and (max-width: 700px) {
		margin-top: 0px;
		height: 600px;
	}
`;

export const TagLineContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 500px;
	place-items: center;
	background-color: black;

	@media screen and (max-width: 700px) {
		height: 300px;
		width: 100vw;
	}
`;

export const LogoIcon = styled(Image)`
	width: 240px;
	height: auto;

	@media screen and (max-width: 700px) {
		width: 120px;
	}
`;

export const Tagline = styled.h2`
	font-family: kalmansk;
	font-size: 5rem;

	@media screen and (max-width: 700px) {
		font-size: 1.8rem;
		text-align: center;
		max-width: 75%;
	}
`;

export const HeroImagesDisplay = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: auto;
	flex-direction: column;
	overflow: hidden;
	gap: 0xp;
	z-index: 1;

	@media (max-width: 700px) {
		height: 100%;
		width: 100vw;
	}
`;

export const MobileHeroWrapper = styled.div`
	@media screen and (min-width: 700px) {
		display: none;
	}
	display: flex;
	width: 100vw;
	height: 90%;
	position: relative;
	justify-content: center;
`;

export const MobileHeroImage = styled(Image)`
	height: 100%;
	width: auto;
`;

interface BackgroundImageProps {
	reverse?: boolean;
	width?: string;
	bottom?: string;
}

const reversedImageStyles = css`
	right: 0;
	left: unset;
	transform: scaleX(-1);
`;

const reverseImage = ({ reverse }: BackgroundImageProps) => {
	return reverse && reversedImageStyles;
};

const BackgroundImage = styled(Image)<BackgroundImageProps>`
	width: ${({ width }) => (width ? width : '50%')};
	height: auto;
	position: absolute;
	left: 0;
	bottom: ${({ bottom }) => (bottom ? bottom : 0)};
	opacity: 0.5;
	mix-blend-mode: multiply;
	background-blend-mode: multiply;
	z-index: -1;

	${reverseImage}
`;

export const RavenBackgroundImage = (props: BackgroundImageProps) => (
	<BackgroundImage src={RavenWings} alt="" {...props} />
);

export const ServicesSection = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	padding-top: 200px;
	margin-bottom: 200px;
	gap: 250px;

	@media screen and (max-width: 700px) {
		padding-top: 0px;
		gap: 150px;
	}
`;
