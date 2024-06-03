'use client';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IconButton } from '../styles';
import { AddToCartIcon } from '@/components/shop/shop-item-card/styles';

type IconLinkProps = {
	url: string;
	icon: StaticImageData;
};

const IconLink = ({ url, icon }: IconLinkProps) => {
	const router = useRouter();
	return (
		<IconButton onClick={() => router.push(url)}>
			<AddToCartIcon src={icon} alt="" />
		</IconButton>
	);
};

export default IconLink;
