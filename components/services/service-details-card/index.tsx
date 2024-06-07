import React from 'react';
import {
	DetailsDescription,
	DetailsDescriptionContainer,
	DetailsTitle,
	PhotoContainer,
	ServiceDetailPhoto,
	ServiceDetailsContainer,
} from './styles';
import { StaticImageData } from 'next/image';

export type ServiceDetails = {
	title: string;
	photo: StaticImageData;
	description: string;
};

type ServiceDetailsProps = {
	serviceDetails: ServiceDetails;
	reverse?: boolean;
};

const ServiceDetailsCard = ({
	serviceDetails,
	reverse,
}: ServiceDetailsProps) => {
	return (
		<ServiceDetailsContainer reverse={reverse}>
			<PhotoContainer>
				<ServiceDetailPhoto
					src={serviceDetails.photo}
					alt={serviceDetails.title}
				/>
			</PhotoContainer>
			<DetailsDescriptionContainer reverse={reverse}>
				<DetailsTitle>{serviceDetails.title}</DetailsTitle>
				<DetailsDescription>{serviceDetails.description}</DetailsDescription>
			</DetailsDescriptionContainer>
		</ServiceDetailsContainer>
	);
};

export default ServiceDetailsCard;
