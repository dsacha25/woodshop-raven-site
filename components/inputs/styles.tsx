'use client';

import styled, { css } from 'styled-components';
import { FormInputProps } from './types';

const labelStyles = css`
	display: unset;
	align-items: unset;
	top: -50%;
	font-size: 16px;
	color: ${({ theme }) => theme.colors.primary};
	outline: 0;
`;

const textAreaLabelStyles = css`
	display: unset;
	align-items: unset;
	top: -15%;
	font-size: 16px;
	color: ${({ theme }) => theme.colors.primary};
	outline: 0;
`;

const errorStyles = css`
	background-color: ${({ theme }) => theme.colors.errorBackground} !important;
	color: ${({ theme }) => theme.colors.error} !important;
	border: 2px solid ${({ theme }) => theme.colors.error} !important;
	box-shadow: 0 0 5px 0.1rem ${({ theme }) => theme.colors.error};
`;

interface FormContainerProps {
	height?: string;
}

export const FormInputComponent = styled.div<
	FormInputProps | FormContainerProps
>`
	display: inline;
	position: relative;
	width: 100%;
	height: ${({ height }) => (height ? height : '50px')};
`;

export const Input = styled.input<FormInputProps>`
	height: 100%;
	width: 100%;
	padding: 0 16px;
	font-size: 1rem;
	letter-spacing: 0.05rem;

	${({ error }) => error && errorStyles}

	color: ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.background};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius: 15px;
`;

export const TextAreaInput = styled.textarea<FormInputProps>`
	height: 180px;
	width: 100%;
	padding: 14px 16px 0;
	font-size: 1rem;
	outline: none;

	${({ error }) => error && errorStyles}

	max-width: -webkit-fill-available;
	min-width: -webkit-fill-available;

	color: ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme }) => theme.colors.background};
	border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius: 15px;
`;

export const InputLabel = styled.label`
	display: flex;
	font-size: 1rem;
	font-weight: 200;
	letter-spacing: 0.05rem;
	position: absolute;
	top: 25%;
	left: 20px;
	pointer-events: none;
	transition: 300ms ease all;

	color: #777;

	&.shrink {
		${labelStyles}
	}
`;

export const TextAreaLabel = styled.label`
	display: flex;
	font-size: 1rem;
	font-weight: 200;
	letter-spacing: 0.05rem;
	position: absolute;
	top: 7%;
	left: 20px;
	pointer-events: none;
	transition: 300ms ease all;

	color: #777;

	&.shrink {
		${textAreaLabelStyles}
	}
`;
