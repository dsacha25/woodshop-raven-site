import React from 'react';
import { PortfolioButton } from '@/components/portfolio/portfolio-display/styles';

type PortfolioLinkProps = {
	url: string;
	text: string;
};

const PortfolioLink = (props: PortfolioLinkProps) => {
	return (
		<PortfolioButton href={props.url} target="_blank" rel="noopener noreferrer">
			{props.text}
		</PortfolioButton>
	);
};

export default PortfolioLink;
