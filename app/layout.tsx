import { Metadata } from 'next';
import { ThemeWrapper } from './theme-wrapper';
import { Michroma } from 'next/font/google';

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
			</body>
		</html>
	);
}
