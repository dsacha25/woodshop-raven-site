import React from 'react';
import {
	LabelContainer,
	MobilePortfolioContainer,
	MobilePortfolioImage,
	PortfolioItemContainer,
} from './styles';
import HorizontalImageDisplay, {
	ImageDisplayProps,
} from '../horz-image-display';
import { RightFade } from '../dividers/styles';
import { SubTitle } from '../titles/subtitle';
import { PortfolioItemProps } from '@/objects/portfolio/portfolio-items-list';

function PortfolioItem({
	images,
	title,
	url,
}: Omit<PortfolioItemProps, 'quote' | 'description'>) {
	return (
		<PortfolioItemContainer href={url}>
			<HorizontalImageDisplay images={images} height="calc(100vw / 6)" />
			<MobilePortfolioContainer>
				<MobilePortfolioImage src={images[1].src} alt={images[0].alt} />
			</MobilePortfolioContainer>
			<LabelContainer>
				<RightFade />
				<SubTitle>{title}</SubTitle>
			</LabelContainer>
		</PortfolioItemContainer>
	);
}

export default PortfolioItem;
