import { StaticImageData } from 'next/image';

import paddle_01 from '@/public/images/paddles/v1/Paddle-V1_01.webp';
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
	stock: number;
	price: number;
};

const shopItemsList: ShopItemProps[] = [
	{
		src: paddle_01,
		name: 'Walnut Paddle',
		category: ['kink', 'woodburning', 'made-to-order'],
		url: '/kink/walnut-paddle',
		stock: 3,
		price: 80,
	},
	{
		src: incenseBurner,
		name: 'Incense Burner',
		category: ['incense', 'woodburning'],
		url: '/incense/incense-burner',
		stock: 1,
		price: 20,
	},
	{
		src: tobaccoPipe,
		name: 'Smoking Pipe',
		category: ['pipes'],
		url: '/pipes/smoking-pipe',
		stock: 0,
		price: 40,
	},
	{
		src: charcuterieBoard,
		name: 'Charcuterie Board',
		category: ['charcuterie'],
		url: '/charcuterie/charcuterie-board',
		stock: 0,
		price: 50,
	},
	{
		src: floggerPurple,
		name: 'Nylon Purple Flogger',
		category: ['kink'],
		url: '/kink/nylon-purple-flogger',
		stock: 1,
		price: 25,
	},
	{
		src: floggerPride,
		name: 'Nylon Pride Flogger',
		category: ['kink'],
		url: '/kink/nylon-pride-flogger',
		stock: 1,
		price: 25,
	},
	{
		src: chessSet,
		name: 'Chess Set',
		category: ['games', 'made-to-order', 'woodburning'],
		url: '/games/chess-set',
		stock: 1,
		price: 0,
	},
	{
		src: tarotBox,
		name: 'Tarot Card Box',
		category: ['boxes', 'woodburning', 'made-to-order'],
		url: '/boxes/tarot-card-box',
		stock: 1,
		price: 0,
	},
	{
		src: orchidBox,
		name: 'Orchid Box',
		category: ['boxes', 'woodburning', 'made-to-order'],
		url: '/boxes/orchid-box',
		stock: 1,
		price: 0,
	},
];

export default shopItemsList;
