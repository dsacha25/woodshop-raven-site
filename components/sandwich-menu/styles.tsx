import styled, { css } from 'styled-components';

import line from '../../public/images/icons/Hamburger_Line.png';
import Image from 'next/image';
import { PageLink } from '../header/styles';
import { IconButton } from '../buttons/styles';

const transition = css`
	transition: 0.5s ease-in;
`;

export const MobileMenuContainer = styled.div`
	@media (min-width: 1250px) {
		display: none;
	}
`;

export const SideMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	width: 30vw;
	min-width: 400px;
	height: 100%;
	justify-content: start;

	padding: 60px 40px;
	gap: 20px;

	background-color: ${({ theme }) => theme.colors.black};

	top: 0;
	right: -200%;

	z-index: 5;

	${transition}

	&.open {
		right: 0px;
	}

	@media screen and (max-width: 700px) {
		width: 100vw;
	}
`;

export const MobileMenuIconContainer = styled.div`
	display: flex;
	width: 50px;
	height: 36px;
	position: relative;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const Icon = styled(Image)`
	height: auto;
	width: 44px;
	transition: 0.25s ease-out;
`;

const topClose = css`
	top: 40%;
`;

const bottomClose = css`
	bottom: 40%;
`;

// 40% === center
export const TopLine = styled(Icon)`
	position: absolute;
	top: 0%;

	&.open {
		${topClose}
	}
`;

export const BottomLine = styled(Icon)`
	position: absolute;
	bottom: 0%;

	&.open {
		${bottomClose}
	}
`;

export const MenuCenter = () => <Icon src={line} alt="" />;

export const MenuLink = styled(PageLink)`
	justify-content: start !important;

	@media screen and (max-width: 900px) {
		font-size: 2rem;
	}
`;

export const ShopMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ShopMenuTop = styled.div`
	display: flex;
`;

const dropDownOpenStyles = css`
	height: 100%;
`;

export const ShopMenuDropDown = styled.div`
	display: flex;
	flex-direction: column;

	height: 0;
	width: 100%;
	overflow: hidden;

	padding-left: 40px;

	transition: 0.6s ease-out;

	&.open {
		${dropDownOpenStyles}
	}
`;

export const DropDownButton = styled(IconButton)`
	width: auto;
`;

export const MenuLinkSmall = styled(PageLink)`
	justify-content: start !important;

	@media screen and (max-width: 900px) {
		font-size: 1rem;
	}
`;

export const CloseMenuContainer = styled.div`
	display: flex;
	width: 50px;
	height: auto;
	aspect-ratio: 1;
	position: absolute;
	justify-content: center;
	align-items: center;
	place-self: end;

	cursor: pointer;
`;

const rotation = 47;

const rotateLeft = css`
	transform: rotate(-${rotation}deg);
`;

const rotateRight = css`
	transform: rotate(${rotation}deg);
`;

export const CloseLeft = styled(Icon)`
	position: absolute;
	aspect-ratio: 1;

	&.closeLeft {
		${rotateLeft}
	}
`;

export const CloseRight = styled(Icon)`
	position: absolute;
	aspect-ratio: 1;

	&.closeRight {
		${rotateRight}
	}
`;

/* export const CloseLeft = (className: string) => (
	<Left src={closeLeft} alt="" className={className} />
);
export const CloseRight = (className: string) => (
	<Right src={closeRight} alt="" className={className} />
);
 */
