import React from 'react';
import {
	ImageGrid,
	ImagesGradient,
	PortfolioContentContainer,
	PortfolioDisplayContainer,
	PortfolioImage,
	PortfolioImageWrapper,
} from './styles';

import Testimonial from '../../testimony';
import { CenterFadeDivider } from '../../dividers/styles';
import { PortfolioItemProps } from '@/objects/portfolio/portfolio-items-list';
import { Description } from '@/components/sharedstyles';
import PortfolioLink from '@/components/buttons/portfolio-link/portfolio-link';

const PortfolioDisplay = ({
	images,
	quote,
	description,
}: Pick<PortfolioItemProps, 'images' | 'quote' | 'description'>) => {
	return (
		<PortfolioDisplayContainer>
			<ImageGrid>
				<ImagesGradient />
				{images.map((img, i) => (
					<PortfolioImageWrapper key={i}>
						<PortfolioImage src={img.src} alt={img.alt} />
					</PortfolioImageWrapper>
				))}
			</ImageGrid>
			<PortfolioContentContainer>
				<CenterFadeDivider />
				<Description>{description}</Description>
				<Testimonial quote={quote} />
				<PortfolioLink
					url="https://www.etsy.com/shop/WoodshopRaven"
					text="View On Etsy"
				/>
			</PortfolioContentContainer>
		</PortfolioDisplayContainer>
	);
};

export default PortfolioDisplay;
