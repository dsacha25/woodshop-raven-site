<<<<<<< HEAD
=======
'use client';

>>>>>>> b98c60c21f1a65157bbebb8fd4fe6bdc3f9e4287
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
