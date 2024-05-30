'use client';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const PortfolioItemContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 380px;
`;

export const LabelContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: end;
`;

export const MobilePortfolioContainer = styled.div`
	display: flex;
	width: auto;
	height: 100%;
	aspect-ratio: 1;
	position: relative;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	@media screen and (min-width: 700px) {
		display: none;
	}
`;

export const MobilePortfolioImage = styled(Image)`
	width: auto;
	height: 100%;
`;
