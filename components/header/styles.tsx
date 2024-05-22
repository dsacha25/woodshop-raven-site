import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import cart from '../../public/images/icons/cart-outline.svg';
import menu from '../../public/images/icons/cart-outline.svg';

export const Nav = styled.nav`
	height: auto;
	width: 100%;
	padding: 2% 4%;
	display: flex;
	gap: 10vw;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 600px) {
		width: 100vw;
		padding: 20px;
	}
`;

export const HomeLink = styled(Image)`
	height: 90px;
	cursor: pointer;

	@media screen and (max-width: 600px) {
		height: 50px;
		width: auto;
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	gap: 20px;

	@media (max-width: 1250px) {
		display: none;
	}
`;

export interface LinkProps {
	active: boolean;
}

const activeStyles = css`
	color: ${({ theme }) => theme.colors.secondary};
	-webkit-text-stroke: ${({ theme }) => theme.colors.secondary} 0.5px;
	text-decoration: underline;
`;

const isActive = ({ active: isActive }: LinkProps) => {
	return isActive && activeStyles;
};

export const PageLink = styled(Link)<LinkProps>`
	${isActive};

	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	text-transform: uppercase;
	letter-spacing: 0.1rem;

	&:hover {
		color: ${({ theme }) => theme.colors.secondary};
	}

	.cart {
		@media (max-width: 1250px) {
			display: none;
		}
	}
`;

export const CartIcon = styled(Image)`
	height: 44px;
	width: 43.5px;
	cursor: pointer;

	@media (max-width: 1250px) {
		display: none;
	}
`;
