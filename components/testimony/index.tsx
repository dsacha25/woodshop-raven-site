import React from 'react';
import {
	AuthorText,
	TestimonialPhoto,
	TestimonyContainer,
	TestimonyText,
	TestimonyWrapper,
} from './styles';
import { RavenBackgroundImage } from '@/page-styles/home/home-styles';
import { StaticImageData } from 'next/image';

export type TestimonyProps = {
	photo?: StaticImageData;
	quote: string;
	author?: string;
	height?: string;
};

const Testimony = ({ photo, quote, author, height }: TestimonyProps) => {
	return (
		<TestimonyWrapper height={height}>
			{photo && <TestimonialPhoto src={photo} alt="" />}
			<TestimonyContainer>
				<TestimonyText>{quote}</TestimonyText>
				<AuthorText>{author}</AuthorText>
			</TestimonyContainer>
			<RavenBackgroundImage reverse={true} />
		</TestimonyWrapper>
	);
};

export default Testimony;
