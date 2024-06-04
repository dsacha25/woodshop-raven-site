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

import bratGgPaddle_01 from '@/public/images/paddles/v2/Paddle-V2_01.webp';
import bratGgPaddle_02 from '@/public/images/paddles/v2/Paddle-V2_02.webp';
import bratGgPaddle_03 from '@/public/images/paddles/v2/Paddle-V2_03.webp';
import bratGgPaddle_04 from '@/public/images/paddles/v2/Paddle-V2_04.webp';
import bratGgPaddle_05 from '@/public/images/paddles/v2/Paddle-V2_05.webp';

import { ImageDisplayProps } from '@/components/horz-image-display';

export type PortfolioItemProps = {
	images: ImageDisplayProps[];
	title: string;
	url: string;
	productLink: string;
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
		url: 'chess-set',
		productLink:
			'https://www.etsy.com/listing/1449258358/handmade-chess-set-w-optional-engravings',
		description:
			"A handmade chess set crafted from Walnut and Curly Maple wood. This project was commissioned as a gift for his son. He requested his last name along with 'Dad' and the name of son woodburned onto the border. A box containing the chess pieces was also include.",
		quote: "''It's a beautiful chess set!'' —Client",
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
		url: 'tarot-card-box',
		productLink:
			'https://www.etsy.com/listing/1462901115/tarot-box-w-woodburning-illustrations',
		description:
			'This maple tarot card box features 2 drawers lined with felt and custom woodburned illustrations. On the side is a scene of Yosemite National Park. The lid is a custom drawing of a snake and skull as requested by the client.',
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
		url: 'orchid-keepsake-box',
		productLink:
			'https://www.etsy.com/listing/1483073433/keepsake-box-w-lid-and-drawer',
		description:
			'A handmade keepsake box featuring a lid with an woodburned orchid illustration. Each drawer is lined with felt.',
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
		url: 'incense-burner',
		productLink:
			'https://www.etsy.com/listing/1483067453/handmade-incense-burner-w-custom',
		description:
			'Handmade incense burner with a customized woodburned illustrations. One side featuring waves of the ocean and the other a row of redwood trees. Reach out for your own customized incense burner.',
		quote: "''This thing is the tits.'' —Merlin",
	},
	{
		images: [
			{
				src: bratGgPaddle_01,
				alt: 'Brat Good Girl Paddle',
				height: 'auto',
				width: '100%',
			},
			{
				src: bratGgPaddle_02,
				alt: 'Brat Good Girl Paddle',
				height: 'auto',
				width: '100%',
			},
			{
				src: bratGgPaddle_03,
				alt: 'Brat Good Girl Paddle',
				height: 'auto',
				width: '100%',
			},
			{
				src: bratGgPaddle_04,
				alt: 'Brat Good Girl Paddle',
				height: 'auto',
				width: '100%',
			},
		],
		title: 'Brat/Good Girl Paddle',
		url: 'brat-good-girl-paddle',
		productLink:
			'https://www.etsy.com/listing/1741800383/bratgood-girl-walnut-maple-paddle',
		description:
			"This handmade walnut and maple paddle features the words 'brat' and 'good girl' woodburned onto the front and back.",
		quote: "''This thing is the tits.'' —Merlin",
	},
];

export default portfolioItems;
