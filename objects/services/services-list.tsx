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
	linkText: string;
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
			tagline: 'Handmade Woodworking, Made to Order',
			annotation: '',
		},
		linkText: 'View Work',
		description:
			'Breathe new life into your home with custom chess sets, pipes, keepsake boxes, and more. Our free consultations allow us to discuss your vision, recommend materials and styles to fit your space, and bring your dream project to life. ',
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
			tagline: 'Unleash the Timeless Beauty of Woodburning.*',
			annotation: '*contact for estimates',
		},
		linkText: 'Get A Quote',
		description:
			'We take ordinary wood and transform it into one-of-a-kind creations: custom designs, logos, and artwork that reflect your unique style. From custom illustrations to graphics, our woodburning services allow you to stand out from the ordinary and add a touch of personalized beauty to any piece.',
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
			tagline: 'Handcrafted Alternative Goods & Creations',
			annotation: '',
		},
		linkText: 'Get A Quote',
		description:
			'Explore our collection of unique paddles, floggers, and more. We also offer custom designs to bring your vision to life, from personalized accessories to statement pieces that reflect your individuality.',
		testimonials: [
			{
				photo: dude_01,
				quote:
					'“These paddles are great. I can’t feel my face anymore and I’ve never been happier!”',
				author: '—Degenerate',
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
