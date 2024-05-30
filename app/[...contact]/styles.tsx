'use client';

import { SolidButton } from '@/components/buttons/styles';
import styled from 'styled-components';

export const ContactPageContainer = styled.div`
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	padding: 0 22.5vw;

	@media screen and (max-width: 700px) {
		padding: unset;
	}
`;

export const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 50px 0;
	gap: 60px;

	@media screen and (max-width: 700px) {
		width: 80vw;
	}
`;

export const SubmitButton = styled(SolidButton)`
	height: 50px;
	width: 200px;
	font-size: 1rem;
	border-radius: 10px;
	margin: unset;
	align-self: end;

	-webkit-text-stroke: ${({ theme }) => theme.colors.background} 1.25px;
`;
