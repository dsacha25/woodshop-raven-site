import React from 'react';
import SectionTitle from '@/components/titles/section-title';
import ServicesList from '@/components/services-list';
import { Metadata } from 'next';
import { ServicesPageContainer } from './styles';

export const metadata: Metadata = {
	title: 'Services',
};

const ServicesPage = () => {
	return (
		<ServicesPageContainer>
			<SectionTitle title="Services" />
			<ServicesList />
		</ServicesPageContainer>
	);
};

export default ServicesPage;
