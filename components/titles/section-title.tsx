'use client';

import React from 'react';
import { CenterFadeDivider } from '../dividers/styles';
import { SectionTitleContainer, SectTitle } from './styles';

type SectionTitleProps = {
	title: string;
	width?: string;
};

const SectionTitle = ({ title, width = '80%' }: SectionTitleProps) => {
	return (
		<SectionTitleContainer>
			<SectTitle>{title}</SectTitle>
			<CenterFadeDivider width={width} strokeWidth="4px" marginY="0px" />
		</SectionTitleContainer>
	);
};

export default SectionTitle;
