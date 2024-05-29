import { Metadata } from 'next';
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export const metadata: Metadata = {
	title: {
		default: 'Woodshop Raven',
		template: '%s | Woodshop Raven',
	},
	description:
		'Custom Wood Crafts & Woodburning. Design your dream piece or explore our creations.',
	twitter: {
		card: 'summary_large_image',
	},
};

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<title>Woodshop Raven: Custom Wood Crafts & Woodburning</title>
					<meta
						property="og:title"
						content="Woodshop Raven: Custom Wood Crafts & Woodburning"
						key="title"
					/>
					<meta
						property="og:description"
						name="description"
						content="Custom Wood Crafts & Woodburning. Design your dream piece or explore our creations."
						key="description"
					/>
					<meta property="og:image" content="/public/opengraph-image.png" />
					<meta property="og:image:png" content="/public/opengraph-image.png" />
					<meta
						property="og:image:width"
						content="/public/opengraph-image.png"
					/>
					<meta
						property="og:image:height"
						content="/public/opengraph-image.png"
					/>
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Michroma&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
