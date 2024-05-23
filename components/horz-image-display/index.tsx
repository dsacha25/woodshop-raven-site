import { StaticImageData } from 'next/image';
import React from 'react';
import {
	ImageContainer,
	ImageDisplay,
	ImagesGradient,
	ImagesWrapper,
} from './styles';

export interface ImageDisplayProps {
	src: StaticImageData | string;
	alt: string;
	width?: string | number;
	height?: string | number;
	horzAdjustment?: string;
}

type HorzImageDisplayProps = {
	images: ImageDisplayProps[];
	height?: string;
};

function HorizontalImageDisplay(props: HorzImageDisplayProps) {
	return (
		<ImagesWrapper height={props.height} repeat={props.images.length}>
			<ImagesGradient />
			{props.images.map(({ src, alt, width, height, horzAdjustment }, i) => (
				<ImageContainer key={i}>
					<ImageDisplay
						src={src}
						alt={alt}
						width={width}
						height={height}
						horzAdjustment={horzAdjustment}
						priority
					/>
				</ImageContainer>
			))}
		</ImagesWrapper>
	);
}

export default HorizontalImageDisplay;
