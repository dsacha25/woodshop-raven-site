import styled, { css } from 'styled-components';

interface ButtonProps {
	width?: string;
	margin?: string;
	fontSize?: string;
}

const SharedButtonStyles = css<ButtonProps>`
	height: 80px;
	width: ${({ width }) => (width ? width : '24vw')};
	outline: none;

	border-radius: 20px;
	text-transform: uppercase;

	font-family: inherit;

	background-position: center;
	transition: background 0.6s;
	margin: ${({ margin }) => (margin ? margin : 'auto')};
	cursor: pointer;

	@media screen and (max-width: 700px) {
		width: 90%;
		font-size: 1.2rem !important;
	}
`;

export const OutlineButton = styled.button<ButtonProps>`
	${SharedButtonStyles}
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.8rem')};
	font-weight: 400;
	letter-spacing: 0.4rem;

	color: ${({ theme }) => theme.colors.primary};
	border: 3px solid ${({ theme }) => theme.colors.primary};

	background-color: transparent;

	background-image: radial-gradient(
		circle,
		transparent 0.1%,
		${({ theme }) => theme.colors.background} 0.125%
	);
	background-size: 150000%;

	&:hover {
		color: ${({ theme }) => theme.colors.secondary};
		border: 3px solid ${({ theme }) => theme.colors.secondary};
	}

	&:active {
		background-color: hsl(43deg, 66%, 66%, 0.32);
		transition: background 0s;
		background-size: 100%;
		transform: scale(0.99);
	}
`;

export const SolidButton = styled.button<ButtonProps>`
	${SharedButtonStyles}

	font-size: 1.4rem;
	color: ${({ theme }) => theme.colors.background};
	background-color: ${({ theme }) => theme.colors.primary};
	-webkit-text-stroke: ${({ theme }) => theme.colors.background} 2px;
	letter-spacing: 0.2rem;
	border: none;

	background-image: radial-gradient(
		circle,
		transparent 0.1%,
		${({ theme }) => theme.colors.background} 0.15%
	);
	background-size: 150000%;

	&:hover {
		background-color: ${({ theme }) => theme.colors.secondary};
		-webkit-text-stroke: ${({ theme }) => theme.colors.primary} 2px;
	}

	&:active {
		background-color: hsl(43deg, 66%, 66%, 0.32);
		transition: background 0s;
		background-size: 100%;
		transform: scale(0.99);
	}
`;

export const IconButton = styled.button<ButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 65px;
	width: 100%;
	outline: none;

	cursor: pointer;
	transition: background 0.6s;

	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.8rem')};
	font-weight: 400;
	letter-spacing: 0.4rem;

	color: ${({ theme }) => theme.colors.primary};
	border: none;

	background-color: transparent;
	/* 
	background-image: radial-gradient(
		circle,
		transparent 0.1%,
		${({ theme }) => theme.colors.background} 0.125%
	); */
	background-size: 150000%;

	&:hover {
		color: ${({ theme }) => theme.colors.secondary};
	}

	&:active {
		background-color: hsl(43deg, 66%, 66%, 0.32);
		transition: background 0s;
		background-size: 100%;
		transform: scale(0.99);
	}
`;
