'use client';

import React, { useEffect } from 'react';
import {
	ItemText,
	ShopButtonsContainer,
	ShopDescriptionContainer,
	ShopIcon,
	ShopItemDisplayContainer,
	ShopPhoto,
	ShopPhotosDisplay,
} from './styles';
import { ShopItemProps } from '@/objects/shop/shop-items-list';
import { useRouter } from 'next/navigation';

import { ImagesGradient } from '@/components/portfolio/portfolio-display/styles';
import { CenterFadeDivider } from '@/components/dividers/styles';
import { GradientDown } from '@/components/gradients/styles';
import { Paragraph } from '@/components/text/styles';
import shopIcons from '@/objects/shop/shop-icons-list';
import {
	Annotation,
	ServiceItemPhotoWrapper,
	ServicePhoto,
	Tagline,
	TaglineContainer,
	TaglineWrapper,
} from '@/app/services/styles';
import NavigationButton from '@/components/buttons/navigation-button';
import SolidLink from '@/components/buttons/solid-link/solid-link';
import { getAnalytics, logEvent } from 'firebase/analytics';
import firebase from '@/app/lib/firebase';

const ShopItemDisplay = (props: ShopItemProps) => {
	useEffect(() => {
		logEvent(getAnalytics(firebase), 'view_item', {
			currency: 'USD',
			value: props.price,
			items: [
				{
					item_name: props.name,
					item_category: props.category[0],
					item_category2: props.category[1],
					item_category3: props.category[2],
					quantity: props.stock,
					price: props.price,
				},
			],
		});
	}, []);

	return (
		<>
			<ShopItemDisplayContainer>
				<ServiceItemPhotoWrapper>
					<ImagesGradient />
					<ServicePhoto src={props.src} alt={props.name} />
				</ServiceItemPhotoWrapper>
				<ShopDescriptionContainer>
					<ShopIcon src={shopIcons[props.category[0]]} alt="" />
					<Paragraph>{props.description}</Paragraph>
					<ItemText>
						Price:
						<span>
							{props.price == 0 ? 'Made to order' : `$${props.price}.00`}
						</span>
					</ItemText>
					<ItemText>
						Stock:
						<span>
							{props.stock == 0 ? 'Commission available' : props.stock}
						</span>
					</ItemText>
					<ShopButtonsContainer>
						{props.stock != 0 && (
							<SolidLink
								width="100%"
								url={props.productLink}
								text="Buy"
								target="_blank"
							/>
						)}
						<NavigationButton
							width="100%"
							fontSize="1.2rem"
							url={`/contact/${props.category[0]}`}
							text="Contact Me"
						/>
					</ShopButtonsContainer>
				</ShopDescriptionContainer>
			</ShopItemDisplayContainer>
			<CenterFadeDivider strokeWidth="3px" marginY="0px" />
			<TaglineWrapper>
				<TaglineContainer>
					<Tagline>Handmade for you.</Tagline>
					<Annotation>Limited stock on select items</Annotation>
				</TaglineContainer>
				<GradientDown />
			</TaglineWrapper>
			<ShopPhotosDisplay>
				{props.additionalPhotos.map((photo, i) => (
					<ShopPhoto key={i} src={photo} alt={props.name + i} />
				))}
			</ShopPhotosDisplay>
		</>
	);
};

export default ShopItemDisplay;
