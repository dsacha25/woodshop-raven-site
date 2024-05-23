import chessboard_01 from '@/public/images/ibanez-chess-set/IbanezChessSet_07.webp';
import chessboard_02 from '@/public/images/ibanez-chess-set/IbanezChessSet_03.webp';
import chessboard_03 from '@/public/images/ibanez-chess-set/IbanezChessSet_06.webp';
import chessboard_04 from '@/public/images/ibanez-chess-set/IbanezChessSet_05.webp';

import laraBox_01 from '@/public/images/lara-box/LaraBox_01.webp';
import laraBox_02 from '@/public/images/lara-box/LaraBox_03.webp';
import laraBox_03 from '@/public/images/lara-box/LaraBox_04.webp';
import laraBox_04 from '@/public/images/lara-box/LaraBox_02.webp';

import orchidBox_01 from '@/public/images/orchid-box/OrchidBox_03.webp';
import orchidBox_02 from '@/public/images/orchid-box/OrchidBox_01.webp';
import orchidBox_03 from '@/public/images/orchid-box/OrchidBox_05.webp';
import orchidBox_04 from '@/public/images/orchid-box/OrchidBox_04.webp';

import incenseBurner_01 from '@/public/images/incense-burner/IncenseBurner_01.webp';
import incenseBurner_02 from '@/public/images/incense-burner/IncenseBurner_04.webp';
import incenseBurner_03 from '@/public/images/incense-burner/IncenseBurner_02.webp';
import incenseBurner_04 from '@/public/images/incense-burner/IncenseBurner_03.webp';
import { ImageDisplayProps } from '@/components/horz-image-display';

export type PortfolioItemProps = {
	images: ImageDisplayProps[];
	title: string;
	url: string;
	description: string;
	quote: string;
};

const portfolioItems: PortfolioItemProps[] = [
	{
		images: [
			{
				src: chessboard_01,
				alt: 'chessboard',
				height: 'auto',
				width: '100%',
			},
			{
				src: chessboard_02,
				alt: 'chessboard',
				height: 'auto',
				width: '100%',
			},
			{
				src: chessboard_03,
				alt: 'chessboard',
				height: 'auto',
				width: '100%',
			},
			{
				src: chessboard_04,
				alt: 'chessboard',
				height: 'auto',
				width: '100%',
			},
		],
		title: 'Chess Set & Box',
		url: 'portfolio/chess-set',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis hendrerit risus. Vestibulum in pulvinar risus, a egestas velit. Aenean eu ipsum posuere, malesuada ante eget, luctus lacus. Sed condimentum tortor eu nisl vestibulum, euismod venenatis nisi iaculis. Pellentesque massa nisi, placerat quis faucibus in, bibendum ut sapien. Sed eget arcu augue.',
		quote:
			"''I would literally eat my own child to get another one of these.'' —The Pope",
	},
	{
		images: [
			{
				src: laraBox_01,
				alt: 'Tarot Card Box',
				height: 'auto',
				width: '100%',
			},
			{
				src: laraBox_02,
				alt: 'Tarot Card Box',
				height: 'auto',
				width: '100%',
			},
			{
				src: laraBox_03,
				alt: 'Tarot Card Box',
				height: 'auto',
				width: '100%',
			},
			{
				src: laraBox_04,
				alt: 'Tarot Card Box',
				height: 'auto',
				width: '100%',
			},
		],
		title: 'Tarot Card Box',
		url: 'portfolio/tarot-card-box',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis hendrerit risus. Vestibulum in pulvinar risus, a egestas velit. Aenean eu ipsum posuere, malesuada ante eget, luctus lacus. Sed condimentum tortor eu nisl vestibulum, euismod venenatis nisi iaculis. Pellentesque massa nisi, placerat quis faucibus in, bibendum ut sapien. Sed eget arcu augue.',
		quote: "''Pretty sure this is cursed. I love it.'' —The Devil",
	},
	{
		images: [
			{
				src: orchidBox_01,
				alt: 'Orchid Keepsake Box',
				height: 'auto',
				width: '100%',
			},
			{
				src: orchidBox_02,
				alt: 'Orchid Keepsake Box',
				height: 'auto',
				width: '100%',
			},
			{
				src: orchidBox_03,
				alt: 'Orchid Keepsake Box',
				height: 'auto',
				width: '100%',
			},
			{
				src: orchidBox_04,
				alt: 'Orchid Keepsake Box',
				height: 'auto',
				width: '100%',
			},
		],
		title: 'Orchid Keepsake Box',
		url: 'portfolio/orchid-keepsake-box',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis hendrerit risus. Vestibulum in pulvinar risus, a egestas velit. Aenean eu ipsum posuere, malesuada ante eget, luctus lacus. Sed condimentum tortor eu nisl vestibulum, euismod venenatis nisi iaculis. Pellentesque massa nisi, placerat quis faucibus in, bibendum ut sapien. Sed eget arcu augue.',
		quote: "''It's a box.'' —Lucifer",
	},
	{
		images: [
			{
				src: incenseBurner_01,
				alt: 'Incense Burner',
				height: 'auto',
				width: '100%',
			},
			{
				src: incenseBurner_02,
				alt: 'Incense Burner',
				height: 'auto',
				width: '100%',
			},
			{
				src: incenseBurner_03,
				alt: 'Incense Burner',
				height: 'auto',
				width: '100%',
			},
			{
				src: incenseBurner_04,
				alt: 'Incense Burner',
				height: 'auto',
				width: '100%',
			},
		],
		title: 'Custom Incense Burner',
		url: 'portfolio/incense-burner',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis hendrerit risus. Vestibulum in pulvinar risus, a egestas velit. Aenean eu ipsum posuere, malesuada ante eget, luctus lacus. Sed condimentum tortor eu nisl vestibulum, euismod venenatis nisi iaculis. Pellentesque massa nisi, placerat quis faucibus in, bibendum ut sapien. Sed eget arcu augue.',
		quote: "''This thing is the tits.'' —Merlin",
	},
];

export default portfolioItems;
