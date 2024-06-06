import React from 'react';
import {
	AboutContainer,
	AboutImagesWrapper,
	AboutPageContainer,
	Description,
	MobileSelfie,
	NameContainer,
	NameText,
} from './styles';
import SectionTitle from '@/components/titles/section-title';
import HorizontalImageDisplay, {
	ImageDisplayProps,
} from '@/components/horz-image-display';
import david_01 from '@/public/images/branding/me_01.webp';
import david_02 from '@/public/images/branding/me_02.webp';
import david_03 from '@/public/images/branding/me_03.webp';
import { RightFade } from '@/components/dividers/styles';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		absolute: 'About',
	},
	description: 'Long Beach, CA based woodworker David Sacha.',
};

const About = () => {
	const images: ImageDisplayProps[] = [
		{ src: david_01, alt: 'David Sacha', width: '100%' },
		{ src: david_02, alt: 'David Sacha', width: '100%' },
		{ src: david_03, alt: 'David Sacha', width: '100%' },
	];

	return (
		<AboutPageContainer>
			<SectionTitle title="About" />
			<AboutContainer>
				<AboutImagesWrapper>
					<HorizontalImageDisplay images={images} height="660px" />

					<MobileSelfie src={david_03} alt="David Sacha" priority />

					<NameContainer>
						<RightFade />
						<NameText>David Sacha</NameText>
					</NameContainer>
				</AboutImagesWrapper>

				<Description>
					From the beaches of Long Beach, California to your home, Woodshop
					Raven brings the beauty of handcrafted wood into your life. David, the
					founder, isn't just a woodworker – he's a designer with a passion for
					creating functional art. A graduate of the College for Creative
					Studies' Product Design program, David brings his design expertise to
					every piece he creates. David’s passion for making beautiful pieces
					shows in his work. Whether it's a handcrafted chessboard for family
					game nights, a keepsake box to hold precious memories, or a
					beautifully carved paddle, David's work is driven by a desire to
					create functional objects that spark joy.
				</Description>
			</AboutContainer>
		</AboutPageContainer>
	);
};

export default About;
