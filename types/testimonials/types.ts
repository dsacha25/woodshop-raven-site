import { StaticImageData } from 'next/image';

type TestimonialProps = {
	photo?: StaticImageData;
	quote: string;
	author?: string;
	height?: string;
};

export default TestimonialProps;
