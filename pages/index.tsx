import Head from 'next/head';
import { CenterFadeDivider } from '@/components/dividers/styles';
import {
	HeroImagesDisplay,
	HeroSection,
	LogoIcon,
	MobileHeroImage,
	MobileHeroWrapper,
	RavenBackgroundImage,
	ServicesSection,
	Tagline,
	TagLineContainer,
	TagLineSection,
} from '../page-styles/home/home-styles';

import incenseBurner from '../public/images/incense-burner/IncenseBurner_01.webp';
import chessboard from '../public/images/ibanez-chess-set/IbanezChessSet_05.webp';
import laraBox from '../public/images/lara-box/LaraBox_03.webp';
import paddle from '../public/images/paddles/v1/Paddle-V1_01.webp';
import orchidBox from '../public/images/orchid-box/OrchidBox_01.webp';
import logoIcon from '../public/images/branding/WR_Icon.png';
import { GradientDown, GradientUp } from '@/components/gradients/styles';
import SectionTitle from '@/components/titles/section-title';
import ServicesList from '@/components/services-list';
import HorizontalImageDisplay, {
	ImageDisplayProps,
} from '@/components/horz-image-display';

export default function Home() {
	const images: ImageDisplayProps[] = [
		{ src: incenseBurner, alt: 'Incense Burner' },
		{ src: chessboard, alt: 'Handmade Chess Set', horzAdjustment: '-75%' },
		{ src: laraBox, alt: 'Woodburned Tarot Card Box' },
		{ src: paddle, alt: 'Bondage Paddle' },
		{
			src: orchidBox,
			alt: 'Woodburned Orchid Keepsake Box',
			horzAdjustment: '-40%',
		},
	];

	return (
		<>
			<HeroSection>
				<HeroImagesDisplay>
					<CenterFadeDivider marginY="12px" />
					<HorizontalImageDisplay images={images} height="640px" />
					<MobileHeroWrapper>
						<MobileHeroImage src={laraBox} alt="Woodburned Tarot Card Box" />
					</MobileHeroWrapper>
					<CenterFadeDivider marginY="12px" />
				</HeroImagesDisplay>
			</HeroSection>
			<RavenBackgroundImage bottom="-10%" />
			<TagLineSection>
				<GradientUp />
				<TagLineContainer>
					<Tagline>
						Bespoke, handmade wood crafts, jewelry, illustrations & more
					</Tagline>
					<LogoIcon src={logoIcon} alt="Woodshop Raven logo" />
				</TagLineContainer>
				<GradientDown />
			</TagLineSection>

			<ServicesSection>
				<SectionTitle title="Services" width="90%" />
				<ServicesList />
			</ServicesSection>
		</>
	);
}
