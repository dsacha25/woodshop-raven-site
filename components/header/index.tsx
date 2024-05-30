'use client';

import React from 'react';
import { CartIcon, PageLink, HomeLink, Nav, LinksContainer } from './styles';
import logo from './WR_logo_transparent.png';

import cart from '@/public/images/icons/cart-outline.svg';
import Link from 'next/link';
import MobileMenu from '../sandwich-menu';
import { usePathname } from 'next/navigation';

const Header = () => {
	const pathname = usePathname();

	return (
		<Nav>
			<Link href="/">
				<HomeLink src={logo} width={246} height={90} alt="logo" />
			</Link>
			<LinksContainer>
				<PageLink active={pathname == '/portfolio'} href="/portfolio">
					Portfolio
				</PageLink>
				<PageLink active={pathname == '/services'} href="/services">
					Services
				</PageLink>
				<PageLink active={pathname == '/shop'} href="/shop">
					Shop
				</PageLink>
				<PageLink active={pathname == '/about'} href="/about">
					About
				</PageLink>
				<PageLink active={pathname == '/contact'} href="/contact">
					Contact
				</PageLink>
			</LinksContainer>
			<PageLink active={false} href="/shop" className="cart">
				<CartIcon src={cart} width={90} height={90} alt="link to cart" />
			</PageLink>
			<MobileMenu />
		</Nav>
	);
};

export default Header;
