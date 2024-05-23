import React from 'react';
import {
	LabelContainer,
	MobilePortfolioContainer,
	MobilePortfolioImage,
	PortfolioItemContainer,
} from './styles';

import { PortfolioItemProps } from '@/objects/portfolio/portfolio-items-list';
import { SubTitle } from '@/components/titles/subtitle';
import { RightFade } from '@/components/dividers/styles';
import HorizontalImageDisplay from '@/components/horz-image-display';

function PortfolioItem({
	images,
	title,
	url,
}: Omit<PortfolioItemProps, 'quote' | 'description'>) {
	return (
		<PortfolioItemContainer href={`portfolio/${url}`}>
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
