import type { AppProps } from 'next/app';
import { ThemeProvider, type DefaultTheme } from 'styled-components';
import GlobalStyle from '@/components/globalstyles';
import Header from '@/components/header';
import Footer from '@/components/footer';
import localFont from 'next/font/local';

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

const kalmansk = localFont({ src: './Kalmansk-Regular.otf' });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</main>
	);
}
