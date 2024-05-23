import React from 'react';
import PortfolioDisplay from '@/components/portfolio/portfolio-display';
import SectionTitle from '@/components/titles/section-title';
import portfolioItems from '@/objects/portfolio/portfolio-items-list';
import { PortfolioPageContainer } from '@/page-styles/portfolio/styles';
import _ from 'lodash';
import { useParams } from 'next/navigation';

const PortfolioItem = () => {
	const params = useParams<{ portfolioId: string }>();

	const portfolioItem = _.find(portfolioItems, ['url', params?.portfolioId]);

	if (!portfolioItem || !params) return;

	return (
		<PortfolioPageContainer>
			<SectionTitle title={portfolioItem.title} />
			<PortfolioDisplay
				images={portfolioItem.images}
				quote={portfolioItem.quote}
				description={portfolioItem.description}
			/>
		</PortfolioPageContainer>
	);
};

export default PortfolioItem;
