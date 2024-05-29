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
} from '@/page-styles/services/styles';
import { CenterFadeDivider, LeftFade } from '@/components/dividers/styles';
import { SolidButton } from '@/components/buttons/styles';
import { Paragraph } from '@/components/text/styles';
import { ImagesGradient } from '@/components/portfolio/portfolio-display/styles';
import { GradientDown } from '@/components/gradients/styles';
import Testimonial from '@/components/testimony';
import { useParams, useRouter } from 'next/navigation';

import servicesList from '@/objects/services/services-list';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
	const params = useParams<{ service: string }>();

	if (!params) return {};

	const { title, image } = servicesList[params.service.toLocaleLowerCase()];

	return {
		title: title,
		openGraph: {
			images: [{ url: image.src.src }],
		},
	};
}

const ServicePage = () => {
	const params = useParams<{ service: string }>();
	const router = useRouter();

	if (!params) return;

	const { title, url, image, icon, tagline, description, testimonials } =
		servicesList[params.service.toLocaleLowerCase()];

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
					<SolidButton margin="0 auto" onClick={() => router.push(url)}>
						Get A Quote
					</SolidButton>
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
						<Tagline>Testimonials</Tagline>
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
