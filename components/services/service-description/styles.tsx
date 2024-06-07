import Image from 'next/image';
import styled from 'styled-components';

interface ContainerProps {
	reverse?: boolean;
}

export const ServiceDescriptionContainer = styled.div<ContainerProps>`
	display: flex;
	width: 100%;
	height: 95vh;
	flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

export const PhotoContainer = styled.div`
	display: flex;
	position: relative;
	width: 40%;
	height: 100%;
	place-items: center;
	overflow: hidden;
`;

export const ServicePhoto = styled(Image)`
	width: auto;
	height: 100%;
`;
