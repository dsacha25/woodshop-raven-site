import Image from 'next/image';
import styled from 'styled-components';
import { ImageDisplayProps } from '.';

interface ImagesDisplayProps {
	height?: string;
	repeat: number;
}

export const ImagesWrapper = styled.div<ImagesDisplayProps>`
	display: grid;
	width: 100%;
	height: ${({ height }) => (height ? height : '100%')};
	position: relative;
	grid-template-columns: repeat(${({ repeat }) => (repeat ? repeat : 5)}, 1fr);
	gap: 0px;

	background-color: black;

	@media screen and (max-width: 700px) {
		display: none;
	}
`;

export const ImagesGradient = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	pointer-events: none;
	background: linear-gradient(
		90deg,
		rgba(35, 31, 32, 1) 0%,
		rgba(35, 31, 32, 0) 25%,
		rgba(35, 31, 32, 0) 75%,
		rgba(35, 31, 32, 1) 100%
	);
	z-index: 2;
`;

interface ImageContainerProps {
	width?: string;
}

export const ImageContainer = styled.div<ImageContainerProps>`
	display: flex;
	height: 100%;
	width: ${({ width }) => (width ? width : 'auto')};
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	transition: 500ms ease all;
	:hover {
		position: absolute;
		transform: scale(1.1);
	}
`;

export const ImageDisplay = styled(Image)<ImageDisplayProps>`
	height: ${({ height }) => (height ? height : '100%')};
	width: ${({ width }) => (width ? width : 'auto')};
	transition: 500ms ease all;
	position: absolute;
	left: ${({ horzAdjustment }) =>
		horzAdjustment ? horzAdjustment : 'initial'};
`;
