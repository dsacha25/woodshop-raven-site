'use client';
import styled from 'styled-components';
import Image from 'next/image';

interface ContainerProps {
	reverse?: boolean;
}

export const ServiceDetailsContainer = styled.div<ContainerProps>`
	display: flex;
	width: 100%;
	height: 65vh;
	min-height: 600px;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

	border-radius: 60px;
	overflow: hidden;

	@media screen and (max-width: 800px) {
		display: grid;

		grid-template-rows: 50% 1fr;
		height: 80vh;
	}
`;

export const PhotoContainer = styled.div`
	display: flex;
	position: relative;
	width: auto;
	height: 100%;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const ServiceDetailPhoto = styled(Image)`
	width: auto;
	height: 100%;
`;

export const DetailsDescriptionContainer = styled.div<ContainerProps>`
	display: flex;
	height: 100%;
	width: 60%;
	flex-direction: column;
	position: relative;
	padding: 0 60px;

	background: linear-gradient(
		${({ reverse }) => (reverse ? '270deg' : '90deg')},
		black 0%,
		rgba(35, 31, 32, 0) 100%
	);

	@media screen and (max-width: 800px) {
		background: linear-gradient(180deg, black 0%, rgba(35, 31, 32, 0) 100%);
		width: 100%;
		padding: 0 20px;
	}
`;

export const DetailsTitle = styled.h3`
	font-size: 2rem;
	text-align: start;
	text-transform: uppercase;
	font-weight: 400;
	letter-spacing: 0.2rem;

	@media screen and (max-width: 800px) {
		font-size: 1.2rem;
	}
`;

export const DetailsDescription = styled.p`
	font-family: kalmansk;
	font-size: 3rem;
	margin: 0;

	@media screen and (max-width: 800px) {
		font-size: 2rem;
	}
`;
