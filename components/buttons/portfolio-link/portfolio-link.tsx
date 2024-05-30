'use client';
import { PortfolioButton } from '@/components/portfolio/portfolio-display/styles';
import { useRouter } from 'next/navigation';
import React from 'react';

type PortfolioLinkProps = {
	url: string;
	text: string;
};

const PortfolioLink = (props: PortfolioLinkProps) => {
	const router = useRouter();
	return (
		<PortfolioButton onClick={() => router.push(props.url)}>
			{props.text}
		</PortfolioButton>
	);
};

export default PortfolioLink;
