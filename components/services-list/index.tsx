import React from 'react';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import {
	ActionContainer,
	OutlineActionButton,
	ServiceItemContainer,
	ServiceItemContentWrapper,
	ServiceItemImage,
	ServiceItemImageContainer,
	ServiceItemTitleContainer,
	ServicesListContainer,
} from './styles';

import { GradientLeft, GradientRight } from '../gradients/styles';
import { RavenBackgroundImage } from '@/page-styles/home/home-styles';
import { LeftFade, RightFade } from '../dividers/styles';

import chessSet from '../../public/images/ibanez-chess-set/IbanezChessSet_01.webp';
import laraBox from '../../public/images/lara-box/LaraBox_03.webp';
import paddle from '../../public/images/paddles/v1/Paddle-V1_01.webp';
import { SubTitle } from '../titles/subtitle';

type ServiceItemProps = {
	title: string;
	actionText: string;
	link: string;
	src: StaticImageData;
	alt: string;
};

const ServicesList = () => {
	const router = useRouter();

	const services: ServiceItemProps[] = [
		{
			title: 'Woodworking',
			actionText: 'View Work',
			link: '/portfolio',
			src: chessSet,
			alt: 'Chess Set',
		},
		{
			title: 'Wood Burning',
			actionText: 'Contact',
			link: '/contact',
			src: laraBox,
			alt: 'Wood Burning',
		},
		{
			title: 'Lobotomies',
			actionText: 'View More',
			link: '/services/lobotomies',
			src: paddle,
			alt: 'Paddles',
		},
	];
	return (
		<ServicesListContainer>
			{services.map((service, i) => (
				<ServiceItemContainer>
					<ServiceItemContentWrapper index={i}>
						<ActionContainer>
							<OutlineActionButton onClick={() => router.push(service.link)}>
								{service.actionText}
							</OutlineActionButton>
						</ActionContainer>
						<ServiceItemImageContainer>
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
