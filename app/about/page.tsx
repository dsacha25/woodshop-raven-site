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
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400'] });

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
					<MobileSelfie src={david_03} alt="David Sacha" />
					<NameContainer>
						<RightFade />
						<NameText>David Sacha</NameText>
					</NameContainer>
				</AboutImagesWrapper>

				<Description className={roboto.className}>
					Welcome to <strong>Woodshop Raven</strong>, a woodworking service that
					combines the beauty of natural wood with the art of customization to
					create exquisite, one-of-a-kind pieces. With a passion for design and
					an unwavering commitment to quality, Woodshop Raven transforms raw
					materials into stunning works of art.
				</Description>

				<Description className={roboto.className}>
					<strong>Long Beach</strong> based craftsman{' '}
					<strong>David Sacha</strong> specializes in the art of customizable
					woodworking, skillfully combining traditional techniques with modern
					tools to design and carve remarkable pieces that reflect the unique
					personality and style of each client. From intricate images to
					personalized names and messages, every detail is thoughtfully crafted
					to create a truly exceptional item.
				</Description>

				<Description className={roboto.className}>
					Whether you're in search of a handcrafted chess set, a keepsake box,
					or a decorative piece to adorn your home, our passion for art and
					quality shines through in every creation. With a focus on{' '}
					<em>customization</em>, these handcrafted pieces make thoughtful,
					personalized gifts for weddings, anniversaries, birthdays, or any
					special occasion.
				</Description>

				<Description className={roboto.className}>
					Choose to support a local artist and embrace the artistry of David’s
					handcrafted wood designs, where function and aesthetic unite to create
					objects that bring both practicality and satisfaction to your lives.
				</Description>
			</AboutContainer>
		</AboutPageContainer>
	);
};

export default About;
