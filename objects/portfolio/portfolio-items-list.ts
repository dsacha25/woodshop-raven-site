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
			'A handcrafted chess set meticulously fashioned from the finest Walnut and Curly Maple wood. This creation was designed as a heartfelt gift for the client’s son. As a personal touch, the father and son’s names were expertly wood burned onto the border. To complete the set, a beautifully crafted box housing the chess pieces was also included.',
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
			'This maple tarot card box showcases two velvet-lined drawers, providing an elegant storage solution for your cards. Custom wood burned illustrations adorn the box, with a captivating scene of Yosemite National Park gracing the side. The lid showcases an intricately designed snake and skull, a unique request from the client, blending the beauty of nature with an edgy, mystical touch. This exquisite box is a perfect fusion of functionality and personalized artistry for tarot enthusiasts.',
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
			'A beautifully handcrafted keepsake box, designed to house your most cherished memories and trinkets. The lid showcases a delicately wood burned orchid illustration. Each drawer is lined with soft felt, offering a gentle and protective space for your valued possessions. This keepsake box not only provides functional storage but also serves as a stunning display piece, enriching your home with its intricate craftsmanship and artistic allure.',
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
			"Our meticulously handmade incense burner offers a unique blend of functionality and personalized artistry. This piece features custom wood burned illustrations, with waves of the ocean on one side and a row of majestic redwood trees on the other, creating an enchanting interplay of nature's serene landscapes. Let the gentle fragrance of incense infuse your home while admiring the captivating visuals this burner offers. Contact us today to commission a custom incense burner tailored to your own unique style and tastes.",
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
			"This sturdy handcrafted paddle, made from rich walnut and sleek maple, features the phrases 'brat' and 'good girl' wood burned onto the front and back. This playful juxtaposition makes it a perfect addition to any BDSM collection. Experience the artistry and craftsmanship of this paddle as it becomes an essential part of your intimate adventures.",
		quote: "''This thing is the tits.'' —Merlin",
	},
];

export default portfolioItems;
