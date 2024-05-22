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
};

const shopItemsList: ShopItemProps[] = [
	{
		src: paddle_01,
		name: 'Paddle',
		category: 'paddles',
		url: '/shop/paddles/v1/1',
	},
	{
		src: incenseBurner,
		name: 'Incense Burner',
		category: 'incense',
		url: '/shop/incense-burners/1',
	},
	{
		src: tobaccoPipe,
		name: 'Tobacco Pipe',
		category: 'pipes',
		url: '/shop/pipes/1',
	},
	{
		src: charcuterieBoard,
		name: 'Charcuterie Board',
		category: 'charcuterie',
		url: '/shop/charcuterie-boards/1',
	},
	{
		src: floggerPurple,
		name: 'Nylon Purple Flogger',
		category: 'floggers',
		url: '/shop/floggers/1',
	},
	{
		src: floggerPride,
		name: 'Nylon Pride Flogger',
		category: 'floggers',
		url: '/shop/floggers/2',
	},
];

export default shopItemsList;
