import Image from 'next/image';
import styled from 'styled-components';

export interface TestimonyStyles {
	height?: string;
}

export const TestimonyWrapper = styled.div<TestimonyStyles>`
	display: flex;
	width: 100%;
	height: ${({ height }) => (height ? height : '300px')};
	position: relative;

	background: linear-gradient(
		90deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 0, 0, 0) 100%
	);
	border-radius: 40px;

	justify-content: space-between;
	align-items: center;

	overflow: hidden;

	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

export const TestimonyContainer = styled.div`
	display: flex;
	width: 100%;
	height: inherit;
	position: relative;
	flex-direction: column;

	justify-content: center;
	align-items: center;
	padding: 0 5%;

	overflow: hidden;
`;

export const TestimonyText = styled.p`
	font-family: kalmansk;
	font-size: 3rem;
	font-weight: 400;
	letter-spacing: 0.1rem;
	text-align: end;
	margin: 0;

	@media (max-width: 1250px) {
		font-size: 2.5rem;
	}

	@media (max-width: 900px) {
		font-size: 2rem;
	}

	@media screen and (max-width: 700px) {
		font-size: 1.5rem;
		width: 80%;
		text-align: center;
	}
`;

export const AuthorText = styled.p`
	font-family: kalmansk;
	font-size: 2rem;
	font-weight: 400;
	letter-spacing: 0.1rem;
	text-align: center;
	font-style: italic;
	margin: 0;
	margin-right: 25px;

	@media (max-width: 1250px) {
		font-size: 1.75em;
	}

	@media (max-width: 900px) {
		font-size: 1.25rem;
	}
`;

export const TestimonialPhoto = styled(Image)`
	height: inherit;
	width: auto;
	aspect-ratio: 1;

	@media screen and (max-width: 800px) {
		width: 100%;
		height: 50%;
		/* border-radius: 20px; */
		object-fit: cover;
		object-position: 50% 50%;
	}
`;
