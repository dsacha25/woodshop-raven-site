'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { OutlineActionButton } from '../services-list/styles';

type NavButtonProps = {
	url: string;
	text: string;
	width?: string;
	fontSize?: string;
};

const NavigationButton = ({ url, text, width, fontSize }: NavButtonProps) => {
	const router = useRouter();
	return (
		<OutlineActionButton
			width={width}
			fontSize={fontSize}
			onClick={() => router.push(url)}
		>
			{text}
		</OutlineActionButton>
	);
};

export default NavigationButton;
