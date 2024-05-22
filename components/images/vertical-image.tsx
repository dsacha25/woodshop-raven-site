import React from 'react';
import { VerticalImageContainer } from './styles';

type VerticalImageProps = {
	src: string;
	alt: string;
};

const VerticalImage = ({ src, alt }: VerticalImageProps) => {
	return <VerticalImageContainer src={src} alt={alt} />;
};

export default VerticalImage;
