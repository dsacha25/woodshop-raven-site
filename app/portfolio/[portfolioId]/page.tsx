import React from 'react';
import PortfolioDisplay from '@/components/portfolio/portfolio-display';
import SectionTitle from '@/components/titles/section-title';
import portfolioItems from '@/objects/portfolio/portfolio-items-list';
import { PortfolioPageContainer } from '@/app/portfolio/styles';
import _ from 'lodash';
import { Metadata } from 'next';

interface Props {
	params: { portfolioId: string };
}

export const generateMetadata = ({ params }: Props): Metadata => {
	return {
		title: params.portfolioId,
	};
};

export const generateStaticParams = () => {
	return portfolioItems.map((item) => item.url);
};

const PortfolioItem = ({ params }: Props) => {
	const portfolioItem = _.find(portfolioItems, ['url', params?.portfolioId]);

	if (!portfolioItem) return;

	return (
		<PortfolioPageContainer>
			<SectionTitle title={portfolioItem.title} />
			<PortfolioDisplay
				images={portfolioItem.images}
				quote={portfolioItem.quote}
				description={portfolioItem.description}
				productLink={portfolioItem.productLink}
			/>
		</PortfolioPageContainer>
	);
};

export default PortfolioItem;
