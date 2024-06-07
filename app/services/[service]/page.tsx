import React from 'react';
import SectionTitle from '@/components/titles/section-title';
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
} from '../styles';
import { CenterFadeDivider, LeftFade } from '@/components/dividers/styles';
import { Paragraph } from '@/components/text/styles';
import { ImagesGradient } from '@/components/portfolio/portfolio-display/styles';
import { GradientDown } from '@/components/gradients/styles';
import Testimonial from '@/components/testimony';

import servicesList from '@/objects/services/services-list';
import SolidLink from '@/components/buttons/solid-link/solid-link';
import { SubTitle } from '@/components/titles/subtitle';
import { Metadata } from 'next';
import capitalize from '@/utils/text/capitalize';

interface Props {
	params: { service: string };
}

export const generateMetadata = ({ params }: Props): Metadata => {
	return {
		title: capitalize(params.service),
	};
};

export const generateStaticParams = () => {
	return Object.keys(servicesList);
};

const ServicePage = ({ params }: Props) => {
	const {
		title,
		url,
		image,
		icon,
		tagline,
		linkText,
		description,
		testimonials,
	} = servicesList[params.service.toLocaleLowerCase()];

	return (
		<ServiceItemPage>
			<SectionTitle title={title} />
			<ServiceItemContentContainer>
				<ServiceItemPhotoWrapper>
					<ImagesGradient />
					<ServicePhoto src={image.src} alt={image.alt} />
				</ServiceItemPhotoWrapper>
				<DescriptionContainer>
					<Icon src={icon} alt="" />
					<Paragraph>{description}</Paragraph>
					<CenterFadeDivider marginY="0px" />
					<SolidLink url={url} text={linkText} />
				</DescriptionContainer>
			</ServiceItemContentContainer>
			<CenterFadeDivider strokeWidth="3px" marginY="0px" />
			<TaglineWrapper>
				<TaglineContainer>
					<Tagline>{tagline.tagline}</Tagline>
					<Annotation>{tagline.annotation}</Annotation>
				</TaglineContainer>
				<GradientDown />
			</TaglineWrapper>
			{testimonials.length > 0 && (
				<TestimonialsContainer>
					<FullWidthContainer>
						<SubTitle align="start">Testimonials</SubTitle>
						<LeftFade marginY="0" />
					</FullWidthContainer>
					<TestimonyList>
						{testimonials.map(({ photo, quote, author }, i) => (
							<Testimonial
								key={i}
								photo={photo}
								quote={quote}
								author={author}
								height="400px"
							/>
						))}
					</TestimonyList>
				</TestimonialsContainer>
			)}
		</ServiceItemPage>
	);
};

export default ServicePage;
