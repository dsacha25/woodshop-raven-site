import React, { useState } from 'react';
import {
	BottomLine,
	CloseLeft,
	CloseMenuContainer,
	CloseRight,
	MenuCenter,
	MenuLink,
	MobileMenuContainer,
	MobileMenuIconContainer,
	SideMenuContainer,
	TopLine,
} from './styles';
import { useRouter } from 'next/router';

import line from '../../public/images/icons/Hamburger_Line.png';
import closeLeft from '../../public/images/icons/CloseLeft.png';
import closeRight from '../../public/images/icons/CloseRight.png';

type Props = {};

const MobileMenu = (props: Props) => {
	const { pathname } = useRouter();

	const [open, setOpen] = useState(false);

	const handleOpenMenu = () => {
		setOpen(true);
	};

	const handleCloseMenu = () => {
		setOpen(false);
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
				<MenuLink
					onClick={handleCloseMenu}
					active={pathname == '/shop'}
					href="/shop"
				>
					Shop
				</MenuLink>
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
