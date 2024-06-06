'use client';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IconButton } from '../styles';
import { AddToCartIcon } from '@/components/shop/shop-item-card/styles';
import { getAnalytics, logEvent } from 'firebase/analytics';
import firebase from '@/app/lib/firebase';

type IconLinkProps = {
	url: string;
	icon: StaticImageData;
	itemName: string;
};

const IconLink = ({ url, icon, itemName }: IconLinkProps) => {
	const router = useRouter();

	const handleClick = () => {
		logEvent(getAnalytics(firebase), 'select_item', {
			items: [{ item_name: itemName }],
		});
		router.push(url);
	};
	return (
		<IconButton onClick={handleClick}>
			<AddToCartIcon src={icon} alt="" />
		</IconButton>
	);
};

export default IconLink;
