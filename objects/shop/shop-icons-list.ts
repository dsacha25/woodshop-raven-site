import { StaticImageData } from 'next/image';
import paddleIcon from '@/public/images/icons/paddle_icon.png';
import pipeIcon from '@/public/images/icons/TobaccoPipe_Icon.png';
import boxesIcon from '@/public/images/icons/keepsake-box_icon.png';
import chessboardIcon from '@/public/images/icons/chessboard_icon.png';
import woodburningIcon from '@/public/images/icons/woodburning_icon.png';
import incenseIcon from '@/public/images/icons/incense_icon.png';
import charcuterieIcon from '@/public/images/icons/charcuterie_icon.png';

interface ShopIconsProps {
	[category: string]: StaticImageData;
}

const shopIcons: ShopIconsProps = {
	boxes: boxesIcon,
	incense: incenseIcon,
	charcuterie: charcuterieIcon,
	pipes: pipeIcon,
	games: chessboardIcon,
	kink: paddleIcon,
	woodburning: woodburningIcon,
};

export default shopIcons;
