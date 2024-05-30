'use client';

import styled, { css } from 'styled-components';

const primary = 'rgba(225, 193, 110, 1)';

export interface DividerProps {
	width?: string;
	strokeWidth?: string;
	marginY?: string;
}

const DividerStyles = css<DividerProps>`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ strokeWidth }) => (strokeWidth ? strokeWidth : '5px')};
	margin: ${({ marginY }) => (marginY ? marginY : '10px')} 0px;
	border: none;
	border-radius: 10px;
`;

const CenterFadeHighlight = styled.hr<DividerProps>`
	${DividerStyles};

	margin: 0px;

	background: linear-gradient(
		0deg,
		rgba(225, 193, 110, 0) 40%,
		rgba(255, 255, 255, 0.75) 66%,
		rgba(225, 193, 110, 0) 100%
	);
`;

const CenterFadeMask = styled.hr<DividerProps>`
	${DividerStyles};
	position: absolute;

	margin: 0px;

	z-index: 2;
	background: linear-gradient(
		90deg,
		rgba(35, 31, 32, 1) 0%,
		rgba(35, 31, 32, 0) 40%,
		rgba(35, 31, 32, 0) 60%,
		rgba(35, 31, 32, 1) 100%
	);
`;

const CenterFadeBase = styled.div<DividerProps>`
	${DividerStyles}
	position: relative;
	z-index: 1;

	/* 	background: -moz-linear-gradient(
		90deg,
		rgba(35, 31, 32, 0) 0%,
		${primary} 50%,
		rgba(35, 31, 32, 0) 100%
	);
	background: -webkit-linear-gradient(
		90deg,
		rgba(35, 31, 32, 0) 0%,
		${primary} 50%,
		rgba(35, 31, 32, 0) 100%
	); */
	/* 	background: linear-gradient(
		90deg,
		rgba(35, 31, 32, 0) 0%,
		${primary} 50%,
		rgba(35, 31, 32, 0) 100%
	); */
	background: linear-gradient(
		90deg,
		rgba(225, 193, 110, 0) 0%,
		rgba(225, 193, 110, 1) 40%,
		rgba(255, 242, 210, 1) 50%,
		rgba(225, 193, 110, 1) 60%,
		rgba(225, 193, 110, 0) 100%
	);
`;
/* 
export const CenterFadeDivider = (props: DividerProps) => (
	<CenterFadeBase {...props}>
		<CenterFadeMask />
		<CenterFadeHighlight />
	</CenterFadeBase>
); */

export const CenterFadeDivider = styled.div<DividerProps>`
	${DividerStyles}
	position: relative;
	z-index: 1;

	/* 	background: -moz-linear-gradient(
	90deg,
	rgba(35, 31, 32, 0) 0%,
	${primary} 50%,
	rgba(35, 31, 32, 0) 100%
);
background: -webkit-linear-gradient(
	90deg,
	rgba(35, 31, 32, 0) 0%,
	${primary} 50%,
	rgba(35, 31, 32, 0) 100%
); */
	/* 	background: linear-gradient(
	90deg,
	rgba(35, 31, 32, 0) 0%,
	${primary} 50%,
	rgba(35, 31, 32, 0) 100%
); */
	background: linear-gradient(
		90deg,
		rgba(225, 193, 110, 0) 0%,
		rgba(225, 193, 110, 1) 40%,
		rgba(255, 233, 180, 1) 50%,
		rgba(225, 193, 110, 1) 60%,
		rgba(225, 193, 110, 0) 100%
	);
`;

export const LeftFade = styled.hr<DividerProps>`
	${DividerStyles}
	border-radius: 0px;

	background: -moz-linear-gradient(
		90deg,
		${primary} 0%,
		rgba(35, 31, 32, 0) 100%
	);
	background: -webkit-linear-gradient(
		90deg,
		${primary} 0%,
		rgba(35, 31, 32, 0) 100%
	);
	background: linear-gradient(90deg, ${primary} 0%, rgba(35, 31, 32, 0) 100%);
`;

export const RightFade = styled.hr<DividerProps>`
	${DividerStyles}
	border-radius: 0px;

	background: -moz-linear-gradient(
		90deg,
		rgba(35, 31, 32, 0) 0%,
		${primary} 100%
	);
	background: -webkit-linear-gradient(
		90deg,
		rgba(35, 31, 32, 0) 0%,
		${primary} 100%
	);
	background: linear-gradient(90deg, rgba(35, 31, 32, 0) 0%, ${primary} 100%);
`;
