'use client';

import GlobalStyle from '@/components/globalstyles';
import emotionIsPropValid from '@emotion/is-prop-valid';
import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import {
	DefaultTheme,
	ServerStyleSheet,
	StyleSheetManager,
	ThemeProvider,
} from 'styled-components';

export default function StyledComponentsRegistry({
	children,
}: {
	children: React.ReactNode;
}) {
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return <>{styles}</>;
	});

	if (typeof window !== 'undefined') return <>{children}</>;

	return (
		<StyleSheetManager
			sheet={styledComponentsStyleSheet.instance}
			shouldForwardProp={(prop) => emotionIsPropValid(prop)}
		>
			{children}
		</StyleSheetManager>
	);
}
