import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Etsy from '@/public/images/icons/Etsy_logo.svg.png';
import Instagram from '@/public/images/icons/instagram.svg';

export const FooterContainer = styled.div`
	display: flex;
	width: 100%;
	height: 400px;
	flex-direction: column;

	@media screen and (max-width: 700px) {
		max-width: 100vw;
	}
`;

export const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: black;
	padding: 80px 100px 40px;
	align-items: center;

	@media screen and (max-width: 700px) {
		padding: 0;
	}
`;

export const ContactInfoContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 700px) {
		flex-direction: column;
	}
`;

export const ContactLink = styled(Link)`
	font-family: kalmansk;
	font-size: 2rem;
	letter-spacing: 0.25rem;
	text-decoration: underline;
`;

export const LinksContainer = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	gap: 60px;
	align-self: end;
	@media screen and (max-width: 700px) {
		align-self: center;
	}
`;

const ELink = styled(Link)`
	display: flex;
	width: 80px;
	height: auto;
	aspect-ratio: 1;

	border: 5px solid ${({ theme }) => theme.colors.primary};
	border-radius: 20px;
`;

const ELogo = styled(Image)`
	width: 60px;
	height: 30px;
	padding: 2.5px 5px;
	margin: auto;
`;

export const EtsyLink = () => (
	<ELink
		href="https://www.etsy.com/shop/WoodshopRaven"
		target="_blank"
		rel="noopener noreferrer"
	>
		<ELogo src={Etsy} alt="etsy shop link" />
	</ELink>
);

const InstLink = styled(Link)`
	display: flex;
	aspect-ratio: 1;
`;

const InstLogo = styled(Image)`
	width: 97px;
	height: 97px;
`;

export const InstagramLink = () => (
	<InstLink href="https://www.instagram.com/woodshopraven" target="_blank">
		<InstLogo src={Instagram} alt="Instagram link" />
	</InstLink>
);
