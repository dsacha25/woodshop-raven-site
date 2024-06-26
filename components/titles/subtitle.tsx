'use client';
import styled from 'styled-components';

interface SubTitleProps {
	align?: string;
}

export const SubTitle = styled.h2<SubTitleProps>`
	font-size: 3rem;
	text-align: ${({ align }) => (align ? align : 'end')};
	margin: 0;
	letter-spacing: 0.25rem;
	font-weight: 400;
	margin: 0 20px;

	@media screen and (max-width: 700px) {
		font-size: 1.5rem;
		letter-spacing: 0.1rem;
		text-transform: uppercase;
		margin: 0 10px;
	}
`;
