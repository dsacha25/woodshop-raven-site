import React from 'react';
import {
	ImageGrid,
	ImagesGradient,
	PortfolioButton,
	PortfolioContentContainer,
	PortfolioDisplayContainer,
	PortfolioImage,
	PortfolioImageWrapper,
} from './styles';
import { Description } from '@/page-styles/about/styles';
import { useRouter } from 'next/navigation';
import Testimony from '../../testimony';
import { CenterFadeDivider } from '../../dividers/styles';
import { PortfolioItemProps } from '@/objects/portfolio/portfolio-items-list';

const PortfolioDisplay = ({
	images,
	quote,
	description,
}: Pick<PortfolioItemProps, 'images' | 'quote' | 'description'>) => {
	const router = useRouter();

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
				<Testimony quote={quote} />
				<PortfolioButton
					onClick={() => router.push('https://www.etsy.com/shop/WoodshopRaven')}
				>
					View On Etsy
				</PortfolioButton>
			</PortfolioContentContainer>
		</PortfolioDisplayContainer>
	);
};

export default PortfolioDisplay;
