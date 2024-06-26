import { Metadata } from 'next';
import { ThemeWrapper } from './theme-wrapper';
import { Michroma } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
	metadataBase: new URL('https://woodshopraven.com'),
	title: {
		default: 'Woodshop Raven',
		template: '%s | Woodshop Raven',
	},
	description:
		'Custom woodworking crafts, woodburning, & more made in Long Beach, CA. Design your dream piece or explore our creations.',
	twitter: {
		card: 'summary_large_image',
	},
	authors: {
		name: 'Akton LLC',
		url: 'https://akton.blue',
	},
};

const michroma = Michroma({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body className={michroma.className}>
				<ThemeWrapper>{children}</ThemeWrapper>
				<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_MEASUREMENT_ID!!} />
			</body>
		</html>
	);
}
