import React from 'react';
import {
	ContactInfoContainer,
	ContactLink,
	EtsyLink,
	FooterContainer,
	FooterContent,
	InstagramLink,
	LinksContainer,
} from './styles';
import { GradientUp } from '../gradients/styles';
import { CenterFadeDivider } from '../dividers/styles';
import { RavenBackgroundImage } from '@/page-styles/home/home-styles';

const Footer = () => {
	return (
		<FooterContainer>
			<GradientUp>
				<RavenBackgroundImage />
			</GradientUp>
			<FooterContent>
				<ContactInfoContainer>
					<ContactLink href="" target="_blank">
						davidsacha@akton.blue
					</ContactLink>
					<ContactLink href="https://www.akton.blue" target="_blank">
						www.akton.blue
					</ContactLink>
				</ContactInfoContainer>
				<CenterFadeDivider strokeWidth="6px" marginY="30px" />
				<LinksContainer>
					<EtsyLink />
					<InstagramLink />
				</LinksContainer>
			</FooterContent>
		</FooterContainer>
	);
};

export default Footer;
