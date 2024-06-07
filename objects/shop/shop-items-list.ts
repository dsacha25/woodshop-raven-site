import { StaticImageData } from 'next/image';

import walnutPaddle_01 from '@/public/images/paddles/v1/Paddle-V1_01.webp';
import walnutPaddle_02 from '@/public/images/paddles/v1/Paddle-V1_02.webp';
import walnutPaddle_03 from '@/public/images/paddles/v1/Paddle-V1_03.webp';
import walnutPaddle_04 from '@/public/images/paddles/v1/Paddle-V1_04.webp';
import walnutPaddle_05 from '@/public/images/paddles/v1/Paddle-V1_05.webp';
import walnutPaddle_06 from '@/public/images/paddles/v1/Paddle-V1_06.webp';

import bratPaddle_01 from '@/public/images/paddles/v2/Paddle-V2_01.webp';
import bratPaddle_02 from '@/public/images/paddles/v2/Paddle-V2_02.webp';
import bratPaddle_03 from '@/public/images/paddles/v2/Paddle-V2_03.webp';
import bratPaddle_04 from '@/public/images/paddles/v2/Paddle-V2_04.webp';
import bratPaddle_05 from '@/public/images/paddles/v2/Paddle-V2_05.webp';

import incenseBurner_01 from '@/public/images/incense-burner/incense-burner_prod-img.webp';
import incenseBurner_02 from '@/public/images/incense-burner/IncenseBurner_01.webp';
import incenseBurner_03 from '@/public/images/incense-burner/IncenseBurner_02.webp';
import incenseBurner_04 from '@/public/images/incense-burner/IncenseBurner_03.webp';
import incenseBurner_05 from '@/public/images/incense-burner/IncenseBurner_04.webp';

import tobaccoPipe_01 from '@/public/images/tobacco-pipe/tobacco_pipe_01.webp';
import tobaccoPipe_02 from '@/public/images/tobacco-pipe/tobacco_pipe_02.webp';
import tobaccoPipe_03 from '@/public/images/tobacco-pipe/tobacco_pipe_03.webp';

import charcuterieBoard_01 from '@/public/images/charcuterie-board/charcuterie_01.webp';
import charcuterieBoard_02 from '@/public/images/charcuterie-board/charcuterie_02.webp';
import charcuterieBoard_03 from '@/public/images/charcuterie-board/charcuterie_03.webp';

import floggerPurple_01 from '@/public/images/floggers/v1/flogger-purple_01.webp';
import floggerPurple_02 from '@/public/images/floggers/v1/flogger-purple_02.webp';
import floggerPurple_03 from '@/public/images/floggers/v1/flogger-purple_03.webp';

import floggerPride_01 from '@/public/images/floggers/v2/flogger-pride_01.webp';
import floggerPride_02 from '@/public/images/floggers/v2/flogger-pride_02.webp';
import floggerPride_03 from '@/public/images/floggers/v2/flogger-pride_03.webp';

import chessSet_01 from '@/public/images/ibanez-chess-set/IbanezChessSet_prod-img.webp';
import chessSet_02 from '@/public/images/ibanez-chess-set/IbanezChessSet_01.webp';
import chessSet_03 from '@/public/images/ibanez-chess-set/IbanezChessSet_02.webp';
import chessSet_04 from '@/public/images/ibanez-chess-set/IbanezChessSet_03.webp';
import chessSet_05 from '@/public/images/ibanez-chess-set/IbanezChessSet_04.webp';
import chessSet_06 from '@/public/images/ibanez-chess-set/IbanezChessSet_05.webp';
import chessSet_07 from '@/public/images/ibanez-chess-set/IbanezChessSet_06.webp';
import chessSet_08 from '@/public/images/ibanez-chess-set/IbanezChessSet_07.webp';

import tarotBox_01 from '@/public/images/lara-box/LaraBox_pro-img.webp';
import tarotBox_02 from '@/public/images/lara-box/LaraBox_01.webp';
import tarotBox_03 from '@/public/images/lara-box/LaraBox_02.webp';
import tarotBox_04 from '@/public/images/lara-box/LaraBox_03.webp';
import tarotBox_05 from '@/public/images/lara-box/LaraBox_04.webp';

import orchidBox_01 from '@/public/images/orchid-box/OrchidBox_prod-img.webp';
import orchidBox_02 from '@/public/images/orchid-box/OrchidBox_01.webp';
import orchidBox_03 from '@/public/images/orchid-box/OrchidBox_02.webp';
import orchidBox_04 from '@/public/images/orchid-box/OrchidBox_03.webp';
import orchidBox_05 from '@/public/images/orchid-box/OrchidBox_04.webp';
import orchidBox_06 from '@/public/images/orchid-box/OrchidBox_05.webp';

export type ShopItemProps = {
	src: StaticImageData;
	name: string;
	category: string[];
	url: string;
	productLink: string;
	description: string;
	stock: number;
	price: number;
	additionalPhotos: StaticImageData[];
};

const shopItemsList: ShopItemProps[] = [
	{
		src: walnutPaddle_01,
		name: 'Walnut Paddle',
		category: ['kink', 'woodburning', 'made-to-order'],
		url: '/kink/walnut-paddle',
		productLink:
			'https://www.etsy.com/listing/1716720497/handcrafted-walnut-spanking-paddle-w',
		description:
			'Handmade walnut paddle with optional nylon rope handle. Used for impact play or teaching your friends a lesson.',
		stock: 3,
		price: 80,
		additionalPhotos: [
			walnutPaddle_01,
			walnutPaddle_02,
			walnutPaddle_03,
			walnutPaddle_04,
			walnutPaddle_05,
			walnutPaddle_06,
		],
	},
	{
		src: bratPaddle_01,
		name: 'Brat Good Girl Paddle',
		category: ['kink', 'woodburning', 'made-to-order'],
		url: '/kink/brat-good-girl-paddle',
		productLink:
			'https://www.etsy.com/listing/1741800383/bratgood-girl-walnut-maple-paddle',
		description:
			"Handmade walnut and maple paddle with 'brat' and 'good girl' woodburned on the front and rear. Used for impact play or teaching your friends a lesson.",
		stock: 1,
		price: 100,
		additionalPhotos: [
			bratPaddle_01,
			bratPaddle_02,
			bratPaddle_03,
			bratPaddle_04,
			bratPaddle_05,
		],
	},
	{
		src: incenseBurner_01,
		name: 'Incense Burner',
		category: ['incense', 'woodburning'],
		url: '/incense/incense-burner',
		productLink:
			'https://www.etsy.com/listing/1483067453/handmade-incense-burner-w-custom',
		description:
			"Incense burner with optional woodburning illustrations. I'll create an incense burner based whatever inspires you.",
		stock: 1,
		price: 20,
		additionalPhotos: [
			incenseBurner_01,
			incenseBurner_03,
			incenseBurner_04,
			incenseBurner_05,
		],
	},
	{
		src: tobaccoPipe_01,
		name: 'Smoking Pipe',
		category: ['pipes'],
		url: '/pipes/smoking-pipe',
		productLink:
			'https://www.etsy.com/listing/1716720497/handcrafted-walnut-spanking-paddle-w',
		description:
			'Handmade tobacco pipe made from briar wood imported from Sweden.',
		stock: 1,
		price: 40,
		additionalPhotos: [tobaccoPipe_01, tobaccoPipe_02, tobaccoPipe_03],
	},
	{
		src: charcuterieBoard_01,
		name: 'Charcuterie Board',
		category: ['charcuterie'],
		url: '/charcuterie/charcuterie-board',
		productLink: '',
		description:
			'Round charcuterie board made from walnut and maple with a nylon rope handle.',
		stock: 0,
		price: 50,
		additionalPhotos: [
			charcuterieBoard_01,
			charcuterieBoard_02,
			charcuterieBoard_03,
		],
	},
	{
		src: floggerPurple_01,
		name: 'Nylon Purple Flogger',
		category: ['kink'],
		url: '/kink/nylon-purple-flogger',
		productLink:
			'https://www.etsy.com/listing/1711419895/black-purple-nylon-flogger-w-whipped',
		description:
			'This flogger is made from black and purple nylon rope with a bamboo handle core.',
		stock: 1,
		price: 25,
		additionalPhotos: [floggerPurple_01, floggerPurple_02, floggerPurple_03],
	},
	{
		src: floggerPride_01,
		name: 'Nylon Pride Flogger',
		category: ['kink'],
		url: '/kink/nylon-pride-flogger',
		productLink:
			'https://www.etsy.com/listing/1711419895/black-purple-nylon-flogger-w-whipped',
		description: '',
		stock: 1,
		price: 25,
		additionalPhotos: [floggerPride_01, floggerPride_02, floggerPride_03],
	},
	{
		src: chessSet_01,
		name: 'Chess Set',
		category: ['games', 'made-to-order', 'woodburning'],
		url: '/games/chess-set',
		productLink:
			'https://www.etsy.com/listing/1449258358/handmade-chess-set-w-optional-engravings',
		description:
			'This custom chess set was made from Walnut and Curly Maple. The name of client was woodburned onto the boarders. All pieces were made by hand. Contact me for custom chess sets.',
		stock: 1,
		price: 2000,
		additionalPhotos: [
			chessSet_01,
			chessSet_03,
			chessSet_04,
			chessSet_05,
			chessSet_06,
			chessSet_07,
			chessSet_08,
		],
	},
	{
		src: tarotBox_01,
		name: 'Tarot Card Box',
		category: ['boxes', 'woodburning', 'made-to-order'],
		url: '/boxes/tarot-card-box',
		productLink:
			'https://www.etsy.com/listing/1462901115/tarot-box-w-woodburning-illustrations',
		description:
			'A tarot card box made from maple with customized illustrations.',
		stock: 1,
		price: 0,
		additionalPhotos: [
			tarotBox_01,
			tarotBox_02,
			tarotBox_03,
			tarotBox_04,
			tarotBox_05,
		],
	},
	{
		src: orchidBox_01,
		name: 'Orchid Box',
		category: ['boxes', 'woodburning', 'made-to-order'],
		url: '/boxes/orchid-box',
		productLink:
			'https://www.etsy.com/listing/1483073433/keepsake-box-w-lid-and-drawer',
		description: 'Keepsake box with orchid illustration on top.',
		stock: 1,
		price: 0,
		additionalPhotos: [
			orchidBox_01,
			orchidBox_02,
			orchidBox_03,
			orchidBox_04,
			orchidBox_05,
			orchidBox_06,
		],
	},
];

export default shopItemsList;
