'use client';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './lib/registry';
import GlobalStyle from '@/components/globalstyles';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useEffect } from 'react';
import firebase, { analytics } from './lib/firebase';

const theme: DefaultTheme = {
	colors: {
		primary: '#FEF0E4',
		secondary: '#E1C16E',
		black: '#000000',
		background: '#231F20',
		error: '#690005',
		errorBackground: '#ffb4ab',
	},
};

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		analytics;
	}, []);

	return (
		<StyledComponentsRegistry>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				{children}
				<Footer />
			</ThemeProvider>
		</StyledComponentsRegistry>
	);
}
