import SectionTitle from '@/components/titles/section-title';
import { PortfolioPageContainer } from '@/page-styles/portfolio/styles';
import React, { FC } from 'react';

interface PortfolioItemPageProps {
	params: { portfolioId: string };
}

const PortfolioItem: FC<PortfolioItemPageProps> = ({ params }) => {
	console.log(params);

	return <PortfolioPageContainer></PortfolioPageContainer>;
};

export default PortfolioItem;
