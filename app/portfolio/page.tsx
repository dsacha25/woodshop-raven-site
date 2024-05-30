import SectionTitle from '@/components/titles/section-title';
import React from 'react';
import PortfolioItem from '@/components/portfolio/portfolio-item';
import portfolioItems from '@/objects/portfolio/portfolio-items-list';
import { PortfolioContentContainer, PortfolioPageContainer } from './styles';

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
						key={item.title + i}
					/>
				))}
			</PortfolioContentContainer>
		</PortfolioPageContainer>
	);
};

export default Portfolio;
