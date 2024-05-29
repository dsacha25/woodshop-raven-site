import type { AppProps } from 'next/app';
import {
	StyleSheetManager,
	ThemeProvider,
	type DefaultTheme,
} from 'styled-components';
import GlobalStyle from '@/components/globalstyles';
import Header from '@/components/header';
import Footer from '@/components/footer';
import localFont from 'next/font/local';
import emotionIsPropValid from '@emotion/is-prop-valid';
import { Metadata } from 'next';

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
/* 
const kalmansk = localFont({ src: './Kalmansk-Regular.otf' });
 */

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StyleSheetManager shouldForwardProp={(prop) => emotionIsPropValid(prop)}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</StyleSheetManager>
	);
}
