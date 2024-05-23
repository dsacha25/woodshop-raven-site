import styled from 'styled-components';
import Image from 'next/image';
import { OutlineButton } from '../buttons/styles';
import Link from 'next/link';

interface ServiceProps {
	index: number;
}

const mobileWidth = '800px';

export const ServicesListContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 500px;

	@media screen and (max-width: 700px) {
		gap: 150px;
	}
`;

export const ServiceItemContainer = styled.div`
	display: flex;
	height: auto;
	width: 100%;
	flex-direction: column;
`;

export const ServiceItemContentWrapper = styled.div<ServiceProps>`
	display: flex;
	flex-direction: ${({ index }) => (index % 2 ? 'row-reverse' : 'row')};
	width: 100%;
	height: 500px;
	position: relative;

	@media screen and (max-width: ${mobileWidth}) {
		flex-direction: column !important;
	}
`;

export const ActionContainer = styled.div`
	display: flex;
	width: 100%;
	height: auto;
	justify-content: center;
	align-items: center;
	background-color: black;
	z-index: 1;

	@media screen and (max-width: ${mobileWidth}) {
		height: 300px;
	}
`;

export const OutlineActionButton = styled(OutlineButton)`
	width: 70%;

	@media screen and (max-width: 800px) {
		height: 70px;
	}
`;

export const ServiceItemImageContainer = styled(Link)`
	display: flex;
	width: 100%;
	height: auto;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
	z-index: 1;

	@media screen and (max-width: ${mobileWidth}) {
		height: 300px;
	}
`;

export const ServiceItemImage = styled(Image)`
	width: auto;
	height: 100%;
	position: absolute;
	bottom: auto;
	top: auto;
	z-index: -1;

	@media screen and (min-width: 1600px) {
		width: 100%;
		height: auto;
	}

	@media screen and (max-width: ${mobileWidth}) {
		width: 100%;
		height: auto;
	}
`;

export const ServiceItemTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
