'use client';

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
