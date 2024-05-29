import ImageProps from '@/types/image/types';
import TaglineProps from '@/types/taglines/types';
import TestimonialProps from '@/types/testimonials/types';
import woodworkingIcon from '@/public/images/icons/woodworking_icon.png';
import woodburningIcon from '@/public/images/icons/woodburning_icon.png';
import kinkIcon from '@/public/images/icons/paddle_icon.png';
import chessSet from '@/public/images/ibanez-chess-set/IbanezChessSet_prod-img.webp';
import tarotBox from '@/public/images/lara-box/LaraBox_pro-img.webp';
import paddle from '@/public/images/paddles/v1/Paddle-V1_01.webp';
import dude_01 from '@/public/images/placeholders/beatupdude_01.jpg';
import dude_02 from '@/public/images/placeholders/beatupdude_02.jpg';
import { StaticImageData } from 'next/image';

export type ServiceProps = {
	title: string;
	url: string;
	image: ImageProps;
	icon: StaticImageData;
	tagline: TaglineProps;
	description: string;
	testimonials: TestimonialProps[];
};

const servicesList: { [service: string]: ServiceProps } = {
	woodworking: {
		title: 'Woodworking',
		url: '/portfolio',
		image: {
			src: chessSet,
			alt: 'Woodworking',
		},
		icon: woodworkingIcon,
		tagline: {
			tagline: 'I will beat the fucking shit out of you for money.*',
			annotation: '*results may vary',
		},
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis hendrerit risus. Vestibulum in pulvinar risus, a egestas velit. Aenean eu ipsum posuere, malesuada ante eget, luctus lacus. Sed condimentum tortor eu nisl vestibulum, euismod venenatis iaculis. Pellentesque massa nisi, placerat quis faucibus in, bibendum ut sapien. Sed eget arcu augue. Aenean eu ipsum posuere, malesuada ante eget, luctus lacus.',
		testimonials: [],
	},
	woodburning: {
		title: 'Woodburning',
		url: '/contact/woodburning',
		image: {
			src: tarotBox,
			alt: 'Woodburning',
		},
		icon: woodburningIcon,
		tagline: {
			tagline: 'I will beat the fucking shit out of you for money.*',
			annotation: '*results may vary',
		},
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis hendrerit risus. Vestibulum in pulvinar risus, a egestas velit. Aenean eu ipsum posuere, malesuada ante eget, luctus lacus. Sed condimentum tortor eu nisl vestibulum, euismod venenatis iaculis. Pellentesque massa nisi, placerat quis faucibus in, bibendum ut sapien. Sed eget arcu augue. Aenean eu ipsum posuere, malesuada ante eget, luctus lacus.',
		testimonials: [
			{
				photo: dude_01,
				quote: '“Very nice, how much?”',
				author: '—Borat',
			},
		],
	},
	kink: {
		title: 'Kink',
		url: '/contact/kink',
		image: {
			src: paddle,
			alt: 'Kink',
		},
		icon: kinkIcon,
		tagline: {
			tagline: 'I will beat the fucking shit out of you for money.*',
			annotation: '*results may vary',
		},
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis hendrerit risus. Vestibulum in pulvinar risus, a egestas velit. Aenean eu ipsum posuere, malesuada ante eget, luctus lacus. Sed condimentum tortor eu nisl vestibulum, euismod venenatis iaculis. Pellentesque massa nisi, placerat quis faucibus in, bibendum ut sapien. Sed eget arcu augue. Aenean eu ipsum posuere, malesuada ante eget, luctus lacus.',
		testimonials: [
			{
				photo: dude_01,
				quote: '“I can’t feel my face anymore and I’ve never been happier!”',
				author: '—Some Fucking Asshole',
			},
			{
				photo: dude_02,
				quote: '*Unintelligible dialog followed by a thumbs up*',
				author: '—Local Idiot',
			},
		],
	},
};

export default servicesList;
