import { StaticImageData } from 'next/image';

import paddle_01 from '@/public/images/paddles/v1/Paddle-V1_01.webp';
import incenseBurner from '@/public/images/incense-burner/incense-burner_prod-img.webp';
import tobaccoPipe from '@/public/images/tobacco-pipe/tobacco_pipe_01.webp';
import charcuterieBoard from '@/public/images/charcuterie-board/charcuterie_01.webp';
import floggerPurple from '@/public/images/floggers/v1/flogger-purple_01.webp';
import floggerPride from '@/public/images/floggers/v2/flogger-pride_01.webp';

export type ShopItemProps = {
	src: StaticImageData;
	name: string;
	category: string;
	url: string;
	stock: number;
	price: number;
};

const shopItemsList: ShopItemProps[] = [
	{
		src: paddle_01,
		name: 'Walnut Paddle',
		category: 'kink',
		url: '/shop/kink/walnut-paddle',
		stock: 3,
		price: 80,
	},
	{
		src: incenseBurner,
		name: 'Incense Burner',
		category: 'incense',
		url: '/shop/incense-burners/incense-burner',
		stock: 1,
		price: 20,
	},
	{
		src: tobaccoPipe,
		name: 'Smoking Pipe',
		category: 'pipes',
		url: '/shop/pipes/smoking-pipe',
		stock: 0,
		price: 40,
	},
	{
		src: charcuterieBoard,
		name: 'Charcuterie Board',
		category: 'charcuterie',
		url: '/shop/charcuterie-boards/charcuterie-board-round',
		stock: 0,
		price: 50,
	},
	{
		src: floggerPurple,
		name: 'Nylon Purple Flogger',
		category: 'floggers',
		url: '/shop/floggers/nylon-purple-flogger',
		stock: 1,
		price: 25,
	},
	{
		src: floggerPride,
		name: 'Nylon Pride Flogger',
		category: 'floggers',
		url: '/shop/floggers/nylon-pride-flogger',
		stock: 1,
		price: 25,
	},
];

export default shopItemsList;
