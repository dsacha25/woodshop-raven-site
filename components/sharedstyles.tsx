'use client';
import styled from 'styled-components';

const Main = styled.main`
	padding: 0;
	flex: 1;
	display: flex;
	height: 100vh;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`;

const Title = styled.h1`
	margin: 0;
	line-height: 1.15;
	font-size: 4rem;
	text-align: center;
	text-decoration: none;

	a {
		color: ${({ theme }) => theme.colors.secondary};
		text-decoration: none;
		&:hover,
		:focus,
		:active {
			text-decoration: underline;
		}
	}
`;

const Description = styled.p`
	text-align: center;
	line-height: 1.5;
	font-size: 1.5rem;
`;

export { Main, Title, Description };
