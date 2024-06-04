import { StaticImageData } from 'next/image';

import paddle_01 from '@/public/images/paddles/v1/Paddle-V1_01.webp';
import paddle_02 from '@/public/images/paddles/v2/Paddle-V2_01.webp';
import incenseBurner from '@/public/images/incense-burner/incense-burner_prod-img.webp';
import tobaccoPipe from '@/public/images/tobacco-pipe/tobacco_pipe_01.webp';
import charcuterieBoard from '@/public/images/charcuterie-board/charcuterie_01.webp';
import floggerPurple from '@/public/images/floggers/v1/flogger-purple_01.webp';
import floggerPride from '@/public/images/floggers/v2/flogger-pride_01.webp';
import chessSet from '@/public/images/ibanez-chess-set/IbanezChessSet_prod-img.webp';
import tarotBox from '@/public/images/lara-box/LaraBox_pro-img.webp';
import orchidBox from '@/public/images/orchid-box/OrchidBox_prod-img.webp';

export type ShopItemProps = {
	src: StaticImageData;
	name: string;
	category: string[];
	url: string;
	productLink: string;
	description: string;
	stock: number;
	price: number;
};

const shopItemsList: ShopItemProps[] = [
	{
		src: paddle_01,
		name: 'Walnut Paddle',
		category: ['kink', 'woodburning', 'made-to-order'],
		url: '/kink/walnut-paddle',
		productLink:
			'https://www.etsy.com/listing/1716720497/handcrafted-walnut-spanking-paddle-w',
		description:
			'Handmade walnut paddle with optional nylon rope handle. Used for impact play or teaching your friends a lesson.',
		stock: 3,
		price: 80,
	},
	{
		src: paddle_02,
		name: 'Brat Good Girl Paddle',
		category: ['kink', 'woodburning', 'made-to-order'],
		url: '/kink/brat-good-girl-paddle',
		productLink:
			'https://www.etsy.com/listing/1741800383/bratgood-girl-walnut-maple-paddle',
		description:
			"Handmade walnut and maple paddle with 'brat' and 'good girl' woodburned on the front and rear. Used for impact play or teaching your friends a lesson.",
		stock: 1,
		price: 100,
	},
	{
		src: incenseBurner,
		name: 'Incense Burner',
		category: ['incense', 'woodburning'],
		url: '/incense/incense-burner',
		productLink:
			'https://www.etsy.com/listing/1483067453/handmade-incense-burner-w-custom',
		description:
			"Incense burner with optional woodburning illustrations. I'll create an incense burner based whatever inspires you.",
		stock: 1,
		price: 20,
	},
	{
		src: tobaccoPipe,
		name: 'Smoking Pipe',
		category: ['pipes'],
		url: '/pipes/smoking-pipe',
		productLink:
			'https://www.etsy.com/listing/1716720497/handcrafted-walnut-spanking-paddle-w',
		description:
			'Handmade tobacco pipe made from briar wood imported from Sweden.',
		stock: 1,
		price: 40,
	},
	{
		src: charcuterieBoard,
		name: 'Charcuterie Board',
		category: ['charcuterie'],
		url: '/charcuterie/charcuterie-board',
		productLink: '',
		description:
			'Round charcuterie board made from walnut and maple with a nylon rope handle.',
		stock: 0,
		price: 50,
	},
	{
		src: floggerPurple,
		name: 'Nylon Purple Flogger',
		category: ['kink'],
		url: '/kink/nylon-purple-flogger',
		productLink:
			'https://www.etsy.com/listing/1711419895/black-purple-nylon-flogger-w-whipped',
		description:
			'This flogger is made from black and purple nylon rope with a bamboo handle core.',
		stock: 1,
		price: 25,
	},
	{
		src: floggerPride,
		name: 'Nylon Pride Flogger',
		category: ['kink'],
		url: '/kink/nylon-pride-flogger',
		productLink:
			'https://www.etsy.com/listing/1711419895/black-purple-nylon-flogger-w-whipped',
		description: '',
		stock: 1,
		price: 25,
	},
	{
		src: chessSet,
		name: 'Chess Set',
		category: ['games', 'made-to-order', 'woodburning'],
		url: '/games/chess-set',
		productLink:
			'https://www.etsy.com/listing/1449258358/handmade-chess-set-w-optional-engravings',
		description:
			'This custom chess set was made from Walnut and Curly Maple. The name of client was woodburned onto the boarders. All pieces were made by hand. Contact me for custom chess sets.',
		stock: 1,
		price: 2000,
	},
	{
		src: tarotBox,
		name: 'Tarot Card Box',
		category: ['boxes', 'woodburning', 'made-to-order'],
		url: '/boxes/tarot-card-box',
		productLink:
			'https://www.etsy.com/listing/1462901115/tarot-box-w-woodburning-illustrations',
		description:
			'A tarot card box made from maple with customized illustrations.',
		stock: 1,
		price: 0,
	},
	{
		src: orchidBox,
		name: 'Orchid Box',
		category: ['boxes', 'woodburning', 'made-to-order'],
		url: '/boxes/orchid-box',
		productLink:
			'https://www.etsy.com/listing/1483073433/keepsake-box-w-lid-and-drawer',
		description: 'Keepsake box with orchid illustration on top.',
		stock: 1,
		price: 0,
	},
];

export default shopItemsList;
