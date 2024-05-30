'use client';

import React from 'react';
import { StaticImageData } from 'next/image';
import {
	ActionContainer,
	ServiceItemContainer,
	ServiceItemContentWrapper,
	ServiceItemImage,
	ServiceItemImageContainer,
	ServiceItemTitleContainer,
	ServicesListContainer,
} from './styles';

import { GradientLeft, GradientRight } from '../gradients/styles';
import { RavenBackgroundImage } from '@/app/styles';
import { LeftFade, RightFade } from '../dividers/styles';

import chessSet from '@/public/images/ibanez-chess-set/IbanezChessSet_01.webp';
import laraBox from '@/public/images/lara-box/LaraBox_03.webp';
import paddle from '@/public/images/paddles/v1/Paddle-V1_01.webp';
import { SubTitle } from '../titles/subtitle';
import NavigationButton from '../buttons/navigation-button';
import { Metadata } from 'next';

type ServiceItemProps = {
	title: string;
	actionText: string;
	url: string;
	src: StaticImageData;
	alt: string;
};

export const services: ServiceItemProps[] = [
	{
		title: 'Woodworking',
		actionText: 'View More',
		url: '/services/woodworking',
		src: chessSet,
		alt: 'Chess Set',
	},
	{
		title: 'Woodburning',
		actionText: 'View More',
		url: '/services/woodburning',
		src: laraBox,
		alt: 'Wood Burning',
	},
	{
		title: 'Kink',
		actionText: 'View More',
		url: '/services/kink',
		src: paddle,
		alt: 'Paddles',
	},
];

const ServicesList = () => {
	return (
		<ServicesListContainer>
			{services.map((service, i) => (
				<ServiceItemContainer key={i}>
					<ServiceItemContentWrapper index={i}>
						<ActionContainer>
							<NavigationButton url={service.url} text={service.actionText} />
						</ActionContainer>
						<ServiceItemImageContainer href={service.url}>
							{i % 2 != 0 ? (
								<GradientRight width="100%" />
							) : (
								<GradientLeft width="100%" />
							)}

							<ServiceItemImage src={service.src} alt={service.alt} />
						</ServiceItemImageContainer>
						<RavenBackgroundImage width="75%" reverse={i % 2 == 0} />
					</ServiceItemContentWrapper>
					<ServiceItemTitleContainer>
						{i % 2 == 0 ? <RightFade /> : <LeftFade />}
						<SubTitle align={i % 2 == 0 ? 'end' : 'start'}>
							{service.title}
						</SubTitle>
					</ServiceItemTitleContainer>
				</ServiceItemContainer>
			))}
		</ServicesListContainer>
	);
};

export default ServicesList;
