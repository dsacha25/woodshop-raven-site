'use client';
import { OutlineButton, SolidButton } from '@/components/buttons/styles';
import Image from 'next/image';
import styled from 'styled-components';

export const ShopItemDisplayContainer = styled.div`
	display: grid;
	width: 90%;
	margin: auto;
	grid-template-columns: 40vw auto;
	overflow: hidden;

	@media screen and (max-width: 800px) {
		grid-template-rows: 100vw 1fr;
		grid-template-columns: 1fr;
		width: 100%;
		height: 100%;
		max-height: unset;
	}
`;

export const ShopDetails = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	height: auto;
`;

export const ItemText = styled.p`
	font-size: 1.6rem;
	margin: 0;

	@media screen and (max-width: 800px) {
		font-size: 1.2rem;
	}

	span {
		padding-left: 20px;
		color: ${({ theme }) => theme.colors.secondary};
	}
`;

export const ShopButtonsContainer = styled.div`
	display: grid;
	grid-template-columns: 300px auto;
	gap: 20px;

	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
	}
`;

export const BuyButton = styled(SolidButton)`
	width: 100%;
	font-size: 1.6rem;
`;

export const ContactButton = styled(OutlineButton)`
	width: 100%;
	font-size: 1.2rem;
	padding: 0 30px;
`;

export const ShopDescriptionContainer = styled.div`
	display: grid;
	grid-template-rows: 100px auto repeat(2, 1.6rem) 80px;
	height: 100%;
	width: 100%;
	padding: 45px 8vw;
	place-items: center;
	gap: 30px;

	@media screen and (max-width: 800px) {
		grid-template-rows: 100px auto repeat(2, 1.2rem) 1fr;
	}
`;

export const ShopIcon = styled(Image)`
	width: 100px;
	height: auto;
	aspect-ratio: 1;
`;
