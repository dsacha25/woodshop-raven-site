import ImageProps from '@/types/image/types';
import TaglineProps from '@/types/taglines/types';
import TestimonialProps from '@/types/testimonials/types';
import woodworkingIcon from '@/public/images/icons/woodworking_icon.png';
import woodburningIcon from '@/public/images/icons/woodburning_icon.png';
import kinkIcon from '@/public/images/icons/paddle_icon.png';
import dude_01 from '@/public/images/placeholders/beatupdude_01.jpg';
import dude_02 from '@/public/images/placeholders/beatupdude_02.jpg';
import { StaticImageData } from 'next/image';
import { ServiceDetails } from '@/components/services/service-details-card';

// Woodworking
import chessSet_01 from '@/public/images/ibanez-chess-set/IbanezChessSet_prod-img.webp';
import orchidBox_02 from '@/public/images/orchid-box/OrchidBox_prod-img.webp';
import tobaccoPipe from '@/public/images/tobacco-pipe/tobacco_pipe_01.webp';
import chessSet_02 from '@/public/images/ibanez-chess-set/IbanezChessSet_01.webp';

// Woodburning
import tarotBox_01 from '@/public/images/lara-box/LaraBox_pro-img.webp';
import tarotBox_02 from '@/public/images/lara-box/LaraBox_03.webp';
import orchidBox_01 from '@/public/images/orchid-box/OrchidBox_01.webp';
import graphicsSample from '@/public/images/services/Woodburning_Graphics.webp';

// Kink
import paddle from '@/public/images/paddles/v1/Paddle-V1_01.webp';
import bratPaddle from '@/public/images/paddles/v2/Paddle-V2_03.webp';
import floggerPurple from '@/public/images/floggers/v1/flogger-purple_01.webp';
import walnutPaddleHandle from '@/public/images/paddles/v1/Paddle-V1_03.webp';

export type ServiceProps = {
	title: string;
	url: string;
	image: ImageProps;
	icon: StaticImageData;
	tagline: TaglineProps;
	linkText: string;
	description: string;
	details: ServiceDetails[];
	testimonials: TestimonialProps[];
};

const servicesList: { [service: string]: ServiceProps } = {
	woodworking: {
		title: 'Woodworking',
		url: '/portfolio',
		image: {
			src: chessSet_01,
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
		details: [
			{
				title: 'Commissions',
				description:
					'Custom made pieces ranging from chessboards, to boxes, to whatever the fuck these assholes want.',
				photo: chessSet_02,
			},
			{
				title: 'Keepsake Boxes',
				description:
					'A clever line that gets you to give me all of your money for some stupid bullshit I made in my basement.',
				photo: orchidBox_02,
			},
			{
				title: 'Small Pieces',
				description:
					'Some bullshit about how I make things like tobacco pipes, incense burners, charcuterie boards, and more.',
				photo: tobaccoPipe,
			},
		],
		testimonials: [],
	},
	woodburning: {
		title: 'Woodburning',
		url: '/contact/woodburning',
		image: {
			src: tarotBox_01,
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
		details: [
			{
				title: 'Art Tailored To You',
				description:
					'Something about how I can make illustrations based on inspiration images or descriptions provided by the client.',
				photo: tarotBox_02,
			},
			{
				title: 'Illustrations',
				description:
					'A clever line that gets you to give me all of your money for some stupid bullshit I made in my basement.',
				photo: orchidBox_01,
			},
			{
				title: 'Graphics',
				description:
					'A clever line that gets you to give me all of your money for some stupid bullshit I made in my basement.',
				photo: graphicsSample,
			},
		],
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
			tagline:
				'Handcrafted alternative goods & creations for lovers of debauchery.',
			annotation: 'You sick fucks',
		},
		linkText: 'Get A Quote',
		description:
			'Explore our collection of unique paddles, floggers, and more. We also offer custom designs to bring your vision to life, from personalized accessories to statement pieces that reflect your individuality. You sick fucking degenerate.',
		details: [
			{
				title: 'Customized Pieces',
				description:
					'Lets create the paddle, flogger, or whatever the fuck else of your dreams: Options include, Wood type, grip, Illustrations/Graphics, and more.',
				photo: bratPaddle,
			},
			{
				title: 'Bullshit',
				description:
					'A clever line that gets you to give me all of your money for some stupid bullshit I made in my basement.',
				photo: floggerPurple,
			},
			{
				title: 'Lobotomies',
				description:
					"Come to my apartment and I'll use a rusty drill bit to give you a lobotomy. Anesthesia not included and results may vary.",
				photo: walnutPaddleHandle,
			},
		],
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
