'use client';

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
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/app/lib/firebase';

function PortfolioItem({
	images,
	title,
	url,
}: Omit<PortfolioItemProps, 'quote' | 'description' | 'productLink'>) {
	const handleAnalytics = () => {
		const content: Content = {
			content_type: 'portfolio',
			content_id: title,
		};

		logEvent(analytics, 'select_content', content);
	};

	return (
		<PortfolioItemContainer onClick={handleAnalytics} href={`portfolio/${url}`}>
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
