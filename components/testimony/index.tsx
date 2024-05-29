import React from 'react';
import {
	AuthorText,
	TestimonialPhoto,
	TestimonialContainer,
	TestimonialText,
	TestimonialWrapper,
} from './styles';
import { RavenBackgroundImage } from '@/page-styles/home/home-styles';
import TestimonialProps from '@/types/testimonials/types';

const Testimonial = ({ photo, quote, author, height }: TestimonialProps) => {
	return (
		<TestimonialWrapper height={height}>
			{photo && <TestimonialPhoto src={photo} alt="" />}
			<TestimonialContainer>
				<TestimonialText>{quote}</TestimonialText>
				<AuthorText>{author}</AuthorText>
			</TestimonialContainer>
			<RavenBackgroundImage reverse={true} />
		</TestimonialWrapper>
	);
};

export default Testimonial;
