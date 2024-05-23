import React from 'react';
import { ItemText, ShopDetails, ShopItemDisplayContainer } from './styles';
import SectionTitle from '@/components/titles/section-title';
import { ShopItemProps } from '@/objects/shop/shop-items-list';
import Image from 'next/image';
import { SolidButton } from '@/components/buttons/styles';
import { useRouter } from 'next/navigation';

const ShopItemDisplay = (props: ShopItemProps) => {
	const router = useRouter();

	return (
		<ShopItemDisplayContainer>
			<Image src={props.src} alt="" width={400} height={400} />
			<ShopDetails>
				<ItemText>Price: ${props.price}.00</ItemText>
				<ItemText>Stock: {props.stock}</ItemText>
				<SolidButton onClick={() => router.push('/contact')}>
					Get A Quote
				</SolidButton>
			</ShopDetails>
		</ShopItemDisplayContainer>
	);
};

export default ShopItemDisplay;
