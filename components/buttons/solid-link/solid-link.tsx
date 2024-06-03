'use client';
import React from 'react';
import { ButtonLink, SolidButton } from '../styles';
import { useRouter } from 'next/navigation';

type SolidLinkProps = {
	url: string;
	text: string;
	width?: string;
	fontSize?: string;
	target?: string;
};
const SolidLink = ({ url, text, width, fontSize, target }: SolidLinkProps) => {
	const router = useRouter();

	return (
		<ButtonLink
			width={width}
			fontSize={fontSize}
			margin="0 auto"
			href={url}
			target={target}
			rel="noopener noreferrer"
		>
			{text}
		</ButtonLink>
	);
};

export default SolidLink;
