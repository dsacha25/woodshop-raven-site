import styled, { css } from 'styled-components';

interface GradientProps {
	height?: string;
	width?: string;
}

const SharedHorzGradientProps = css<GradientProps>`
	height: 100%;
	width: ${({ width }) => (width ? width : '100px')};
`;

const SharedVertGradientProps = css<GradientProps>`
	height: ${({ height }) => (height ? height : '100px')};
	width: 100%;
`;

export const GradientUp = styled.div<GradientProps>`
	${SharedVertGradientProps}
	position: relative;
	background: linear-gradient(0deg, black 0%, rgba(35, 31, 32, 0) 100%);
`;

export const GradientDown = styled.div<GradientProps>`
	${SharedVertGradientProps}
	background: linear-gradient(180deg, black 0%, rgba(35, 31, 32, 0) 100%);
`;

export const GradientLeft = styled.div<GradientProps>`
	${SharedHorzGradientProps}
	margin-right: auto;
	background: linear-gradient(90deg, black 0%, rgba(35, 31, 32, 0) 100%);
`;

export const GradientRight = styled.div<GradientProps>`
	${SharedHorzGradientProps}
	margin-left: auto;
	background: linear-gradient(270deg, black 0%, rgba(35, 31, 32, 0) 100%);
`;
