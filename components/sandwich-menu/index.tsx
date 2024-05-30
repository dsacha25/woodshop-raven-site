import React, { useState } from 'react';
import {
	BottomLine,
	CloseLeft,
	CloseMenuContainer,
	CloseRight,
	DropDownButton,
	MenuCenter,
	MenuLink,
	MenuLinkSmall,
	MobileMenuContainer,
	MobileMenuIconContainer,
	ShopMenuContainer,
	ShopMenuDropDown,
	ShopMenuTop,
	SideMenuContainer,
	TopLine,
} from './styles';

import line from '../../public/images/icons/Hamburger_Line.png';
import closeLeft from '../../public/images/icons/CloseLeft.png';
import closeRight from '../../public/images/icons/CloseRight.png';
import { IconButton } from '../buttons/styles';
import { AddToCartIcon } from '../shop/shop-item/styles';

import addIcon from '@/public/images/icons/add_icon_white.svg';
import { usePathname } from 'next/navigation';

type Props = {};

const MobileMenu = (props: Props) => {
	const pathname = usePathname();

	const [open, setOpen] = useState(false);
	const [dropDownOpen, setDropDownOpen] = useState(false);

	const handleOpenMenu = () => {
		setDropDownOpen(false);
		setOpen(true);
	};

	const handleCloseMenu = () => {
		setOpen(false);
		setDropDownOpen(false);
	};

	const handleToggleDropDown = () => {
		setDropDownOpen(!dropDownOpen);
	};

	return (
		<MobileMenuContainer>
			<MobileMenuIconContainer onClick={handleOpenMenu}>
				<TopLine src={line} alt="" className={open ? 'open' : ''} />
				<MenuCenter />
				<BottomLine src={line} alt="" className={open ? 'open' : ''} />
			</MobileMenuIconContainer>
			<SideMenuContainer className={open ? 'open' : ''}>
				<CloseMenuContainer onClick={handleCloseMenu}>
					<CloseLeft
						src={closeLeft}
						className={open ? '' : 'closeLeft'}
						alt=""
					/>
					<CloseRight
						src={closeRight}
						className={open ? '' : 'closeRight'}
						alt=""
					/>
				</CloseMenuContainer>
				<MenuLink onClick={handleCloseMenu} active={pathname == '/'} href="/">
					Home
				</MenuLink>
				<MenuLink
					onClick={handleCloseMenu}
					active={pathname == '/portfolio'}
					href="/portfolio"
				>
					Portfolio
				</MenuLink>
				<MenuLink
					onClick={handleCloseMenu}
					active={pathname == '/services'}
					href="/services"
				>
					Services
				</MenuLink>
				<ShopMenuContainer>
					<ShopMenuTop>
						<MenuLink
							onClick={handleCloseMenu}
							active={pathname == '/shop'}
							href="/shop"
						>
							Shop
						</MenuLink>
						<DropDownButton onClick={handleToggleDropDown} margin="0">
							<AddToCartIcon src={addIcon} alt="" />
						</DropDownButton>
					</ShopMenuTop>

					<ShopMenuDropDown className={dropDownOpen ? 'open' : ''}>
						<MenuLinkSmall
							onClick={handleCloseMenu}
							active={false}
							href="/shop/boxes"
						>
							Boxes
						</MenuLinkSmall>
						<MenuLinkSmall
							onClick={handleCloseMenu}
							active={false}
							href="/shop/incense"
						>
							Incense
						</MenuLinkSmall>
						<MenuLinkSmall
							onClick={handleCloseMenu}
							active={false}
							href="/shop/charcuterie"
						>
							Charcuterie
						</MenuLinkSmall>
						<MenuLinkSmall
							onClick={handleCloseMenu}
							active={false}
							href="/shop/pipes"
						>
							Pipes
						</MenuLinkSmall>
						<MenuLinkSmall
							onClick={handleCloseMenu}
							active={false}
							href="/shop/games"
						>
							Games
						</MenuLinkSmall>
						<MenuLinkSmall
							onClick={handleCloseMenu}
							active={false}
							href="/shop/kink"
						>
							Kink
						</MenuLinkSmall>
						<MenuLinkSmall
							onClick={handleCloseMenu}
							active={false}
							href="/shop/woodburning"
						>
							Woodburning
						</MenuLinkSmall>
						<MenuLinkSmall
							onClick={handleCloseMenu}
							active={false}
							href="/shop/made-to-order"
						>
							Made to Order
						</MenuLinkSmall>
					</ShopMenuDropDown>
				</ShopMenuContainer>
				<MenuLink
					onClick={handleCloseMenu}
					active={pathname == '/about'}
					href="/about"
				>
					About
				</MenuLink>
				<MenuLink
					onClick={handleCloseMenu}
					active={pathname == '/contact'}
					href="/contact"
				>
					Contact
				</MenuLink>
			</SideMenuContainer>
		</MobileMenuContainer>
	);
};

export default MobileMenu;
