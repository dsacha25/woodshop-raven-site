<<<<<<< HEAD
=======
'use client';

>>>>>>> b98c60c21f1a65157bbebb8fd4fe6bdc3f9e4287
import SectionTitle from '@/components/titles/section-title';
import React from 'react';
import {
	PortfolioContentContainer,
	PortfolioPageContainer,
} from '@/page-styles/portfolio/styles';
import PortfolioItem from '@/components/portfolio-item';
import portfolioItems from '@/objects/portfolio/portfolio-items-list';

const Portfolio = () => {
	return (
		<PortfolioPageContainer>
			<SectionTitle title="Portfolio" />
			<PortfolioContentContainer>
				{portfolioItems.map((item, i) => (
					<PortfolioItem
						images={item.images}
						title={item.title}
						url={item.url}
						key={item.title}
					/>
				))}
			</PortfolioContentContainer>
		</PortfolioPageContainer>
	);
};

export default Portfolio;
