import React, { useEffect, useState } from 'react';
import {
	FilterButton,
	FilterDivider,
	FiltersContainer,
	FilterText,
	ShopFilterContainer,
} from './styles';
import Checkbox from '@/components/buttons/checkbox';
import _ from 'lodash';

export type ShopFilterProps = {
	filters?: string[];
	onChange: (filters: string[]) => void;
};

const allFilters: string[] = [
	'boxes',
	'incense',
	'pipes',
	'games',
	'kink',
	'woodburning',
	'made to order',
];

const ShopFilter = (props: ShopFilterProps) => {
	const [filters, setFilters] = useState<string[]>(['kink']);

	const handleSetFilters = (filter: string) => {
		if (filters.includes(filter)) {
			// has filter | remove
			setFilters(filters.filter((i) => i != filter));
		} else {
			//  does not have filter | add
			setFilters((filters) => [...filters, filter]);
		}
	};

	useEffect(() => {
		props.onChange(filters);
	}, [filters]);

	return (
		<ShopFilterContainer>
			<FilterText>filters:</FilterText>
			<FilterDivider />
			<FiltersContainer>
				{allFilters.map((filt, i) => (
					<Checkbox
						label={filt}
						checked={filters.includes(filt)}
						name={filt}
						id={filt}
						onChange={() => handleSetFilters(filt)}
						key={i}
					/>
				))}
			</FiltersContainer>
		</ShopFilterContainer>
	);
};

export default ShopFilter;
