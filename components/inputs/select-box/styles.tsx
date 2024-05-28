import styled from 'styled-components';
import { Input } from '../styles';
import { IconButton } from '@/components/buttons/styles';
import Image from 'next/image';

export const SelectBoxContainer = styled.div`
	display: flex;
	height: 50px;
`;

export const SelectBoxInput = styled(Input)`
	pointer-events: none;
	text-transform: capitalize;
	font-family: Michroma;
`;

export const SelectButton = styled(IconButton)`
	width: 100%;
	height: auto;
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	justify-content: end;

	border-top-right-radius: 15px;
	border-bottom-right-radius: 15px;
`;

export const DownArrowIcon = styled(Image)`
	width: 50px;
	height: auto;
`;

export const SelectDropDownContainer = styled.select`
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow: scroll;
	height: 50px;
	opacity: 0;
	z-index: 0;
	position: absolute;
	top: 0;
	padding-left: 15px;

	background-color: ${({ theme }) => theme.colors.background};
`;

export const SelectOption = styled.option`
	text-transform: capitalize;
	font-family: Michroma;
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.primary};
`;
