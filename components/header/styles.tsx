import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import Etsy from '@/public/images/icons/Etsy_logo.svg.png';

export const Nav = styled.nav`
	height: auto;
	width: 100%;
	padding: 2% 4% 0;
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

	&.hidden {
		display: none;
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

const ELink = styled(Link)`
	display: flex;
	width: 80px;
	height: auto;
	aspect-ratio: 1;

	border: 5px solid ${({ theme }) => theme.colors.primary};
	border-radius: 20px;

	@media screen and (max-width: 1250px) {
		display: none;
	}
`;

const ELogo = styled(Image)`
	width: 60px;
	height: 30px;
	padding: 2.5px 5px;
	margin: auto;
`;

export const EtsyHeaderLink = () => (
	<ELink
		href="https://www.etsy.com/shop/WoodshopRaven"
		target="_blank"
		rel="noopener noreferrer"
	>
		<ELogo src={Etsy} alt="etsy shop link" />
	</ELink>
);
