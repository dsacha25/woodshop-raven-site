'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { OutlineActionButton } from '../services-list/styles';
import { getAnalytics, logEvent } from 'firebase/analytics';
import firebase from '@/app/lib/firebase';

type NavButtonProps = {
	url: string;
	text: string;
	content?: Content;
	width?: string;
	fontSize?: string;
};

const NavigationButton = ({
	url,
	text,
	content,
	width,
	fontSize,
}: NavButtonProps) => {
	const router = useRouter();

	const handleNavigiation = () => {
		if (content) {
			logEvent(getAnalytics(firebase), 'select_content', content);
		}

		router.push(url);
	};
	return (
		<OutlineActionButton
			width={width}
			fontSize={fontSize}
			onClick={handleNavigiation}
		>
			{text}
		</OutlineActionButton>
	);
};

export default NavigationButton;
