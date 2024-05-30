'use client';
import React from 'react';
import { SolidButton } from '../styles';
import { useRouter } from 'next/navigation';

type SolidLinkProps = {
	url: string;
	text: string;
	width?: string;
	fontSize?: string;
};
const SolidLink = ({ url, text, width, fontSize }: SolidLinkProps) => {
	const router = useRouter();

	return (
		<SolidButton
			width={width}
			fontSize={fontSize}
			margin="0 auto"
			onClick={() => router.push(url)}
		>
			{text}
		</SolidButton>
	);
};

export default SolidLink;
