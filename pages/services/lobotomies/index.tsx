import React from 'react';
import SectionTitle from '@/components/titles/section-title';
import Image from 'next/image';
import Lob from '../../../public/images/icons/logotomy_icon.png';
import {
	Annotation,
	DescriptionContainer,
	Icon,
	ServiceItemContentContainer,
	ServiceItemPage,
	ServiceItemPhotoWrapper,
	ServicePhoto,
	TaglineContainer,
	TaglineWrapper,
	Tagline,
	TestimonialsContainer,
	FullWidthContainer,
	TestimonyList,
} from '../../../page-styles/services/styles';
import { CenterFadeDivider, LeftFade } from '@/components/dividers/styles';
import paddle from '@/public/images/paddles/v1/Paddle-V1_01.webp';
import { Description } from '@/page-styles/about/styles';
import { SolidButton } from '@/components/buttons/styles';
import { Paragraph } from '@/components/text/styles';
import { ImagesGradient } from '@/components/portfolio-display/styles';
import { GradientDown } from '@/components/gradients/styles';
import Testimony, { TestimonyProps } from '@/components/testimony';

import dude_01 from '@/public/images/placeholders/beatupdude_01.jpg';
import dude_02 from '@/public/images/placeholders/beatupdude_02.jpg';
import { useRouter } from 'next/navigation';

type Props = {};

const Lobotomies = (props: Props) => {
	const router = useRouter();

	const lobotomyTestimonials: TestimonyProps[] = [
		{
			photo: dude_01,
			quote: '“I can’t feel my face anymore and I’ve never been happier!”',
			author: '—Some Fucking Asshole',
		},
		{
			photo: dude_02,
			quote: '*Unintelligible dialog followed by a thumbs up*',
			author: '—Local Idiot',
		},
	];

	return (
		<ServiceItemPage>
			<SectionTitle title="Kink" />
			<ServiceItemContentContainer>
				<ServiceItemPhotoWrapper>
					<ImagesGradient />
					<ServicePhoto src={paddle} alt="Spanking Paddle" />
				</ServiceItemPhotoWrapper>
				<DescriptionContainer>
					<Icon src={Lob} alt="" />
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
						hendrerit risus. Vestibulum in pulvinar risus, a egestas velit.
						Aenean eu ipsum posuere, malesuada ante eget, luctus lacus. Sed
						condimentum tortor eu nisl vestibulum, euismod venenatis nisi
						iaculis. Pellentesque massa nisi, placerat quis faucibus in,
						bibendum ut sapien. Sed eget arcu augue. Aenean eu ipsum posuere,
						malesuada ante eget, luctus lacus.
					</Paragraph>
					<CenterFadeDivider marginY="0px" />
					<SolidButton margin="0 auto" onClick={() => router.push('/contact')}>
						Get A Quote
					</SolidButton>
				</DescriptionContainer>
			</ServiceItemContentContainer>
			<CenterFadeDivider strokeWidth="3px" marginY="0px" />
			<TaglineWrapper>
				<TaglineContainer>
					<Tagline>I will beat the fucking shit out of you for money.*</Tagline>
					<Annotation>*results may vary</Annotation>
				</TaglineContainer>
				<GradientDown />
			</TaglineWrapper>
			<TestimonialsContainer>
				<FullWidthContainer>
					<Tagline>Testimonials</Tagline>
					<LeftFade marginY="0" />
				</FullWidthContainer>
				<TestimonyList>
					{lobotomyTestimonials.map(({ photo, quote, author }, i) => (
						<Testimony
							key={i}
							photo={photo}
							quote={quote}
							author={author}
							height="400px"
						/>
					))}
				</TestimonyList>
			</TestimonialsContainer>
		</ServiceItemPage>
	);
};

export default Lobotomies;
