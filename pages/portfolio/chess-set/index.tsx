import React from 'react';
import { PortfolioPageContainer } from '../../../page-styles/portfolio/styles';
import SectionTitle from '@/components/titles/section-title';
import portfolioItems from '../../../objects/portfolio/portfolio-items-list';
import PortfolioDisplay from '@/components/portfolio-display';

const ChessSet = () => {
	const { title, images, description, quote } = portfolioItems[0];

	return (
		<PortfolioPageContainer>
			<SectionTitle title={title} />
			<PortfolioDisplay
				images={images}
				quote={quote}
				description={description}
			/>
		</PortfolioPageContainer>
	);
};

export default ChessSet;
