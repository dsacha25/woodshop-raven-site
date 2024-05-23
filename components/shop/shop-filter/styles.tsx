import { Checkbox } from '@nextui-org/checkbox';
import { cn } from '@nextui-org/system';
import styled from 'styled-components';

export const ShopFilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const FilterText = styled.p`
	font-size: 1.2rem;
	letter-spacing: 0.1rem;
	margin: 0;
	padding-left: 5px;
`;

export const FilterDivider = styled.div`
	height: 1px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const FiltersContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	gap: 2px;

	justify-content: start;

	padding-left: 30px;
`;

export const FilterButton = styled.button`
	border: 2px solid white;
	width: 40px;
`;
