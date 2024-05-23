import React from 'react';
import { ServicesPageContainer } from '@/page-styles/services/styles';
import SectionTitle from '@/components/titles/section-title';
import ServicesList from '@/components/services-list';

const Services = () => {
	return (
		<ServicesPageContainer>
			<SectionTitle title="Services" />
			<ServicesList />
		</ServicesPageContainer>
	);
};

export default Services;
