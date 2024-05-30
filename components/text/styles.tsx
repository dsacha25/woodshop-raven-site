'use client';

import styled from 'styled-components';

export const Paragraph = styled.p`
	font-weight: 400;
	font-size: 1.4rem;
	line-height: 2rem;
	text-indent: 50px;
	margin: 0;

	height: 100%;

	@media (max-width: 1250px) {
		font-size: 1.2rem;
		line-height: 2rem;
	}

	@media (max-width: 900px) {
		font-size: 1rem;
	}
`;
