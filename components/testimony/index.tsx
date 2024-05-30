'use client';
import React from 'react';
import {
	AuthorText,
	TestimonialPhoto,
	TestimonialContainer,
	TestimonialText,
	TestimonialWrapper,
} from './styles';

import TestimonialProps from '@/types/testimonials/types';
import { RavenBackgroundImage } from '@/app/styles';

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
