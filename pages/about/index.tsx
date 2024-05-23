import React from 'react';
import {
	AboutContainer,
	AboutImagesWrapper,
	AboutPageContainer,
	Description,
	MobileSelfie,
	NameContainer,
	NameText,
} from '@/page-styles/about/styles';
import SectionTitle from '@/components/titles/section-title';
import HorizontalImageDisplay, {
	ImageDisplayProps,
} from '@/components/horz-image-display';
import david_01 from '@/public/images/branding/me_01.webp';
import david_02 from '@/public/images/branding/me_02.webp';
import david_03 from '@/public/images/branding/me_03.webp';
import { RightFade } from '@/components/dividers/styles';

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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
					hendrerit risus. Vestibulum in pulvinar risus, a egestas velit. Aenean
					eu ipsum posuere, malesuada ante eget, luctus lacus. Sed condimentum
					tortor eu nisl vestibulum, euismod venenatis nisi iaculis.
					Pellentesque massa nisi, placerat quis faucibus in, bibendum ut
					sapien. Sed eget arcu augue. Nunc quam ante, facilisis in eleifend ac,
					placerat ac metus. Praesent rhoncus nibh consectetur fermentum
					gravida. Phasellus ullamcorper, mi vitae aliquet venenatis, magna
					turpis maximus leo, eu iaculis elit ante mattis tellus. Sed vulputate
					urna a convallis malesuada.
				</Description>
			</AboutContainer>
		</AboutPageContainer>
	);
};

export default About;
