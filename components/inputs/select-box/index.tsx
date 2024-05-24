import React, {
	ChangeEvent,
	ChangeEventHandler,
	forwardRef,
	useEffect,
	useRef,
	useState,
} from 'react';
import { FormInputComponent, InputLabel } from '../styles';
import {
	DownArrowIcon,
	SelectBoxInput,
	SelectButton,
	SelectDropDownContainer,
	SelectOption,
} from './styles';
import downArrow from '@/public/images/icons/down_arrow.svg';
import { SelectBoxOptions } from '@/pages/contact/types';
import getEnumKeys from '@/utils/enums/get-enum-keys';
import { FieldError } from 'react-hook-form';

type SelectInputProps = {
	label?: string;
	value?: string;
	error?: FieldError | string;
	required?: boolean;
	onValueChange: (value: SelectBoxOptions | null) => void;
};

const SelectBox = forwardRef<HTMLInputElement, SelectInputProps>(
	(props, ref) => {
		const selectRef = useRef<HTMLSelectElement>(null);

		const [interest, setInterest] = useState<SelectBoxOptions | null>(null);

		const handleOpenSelect = () => {
			if (selectRef.current) {
				selectRef.current.showPicker();
			}
		};

		const handleOptionChange = (x: ChangeEvent<HTMLSelectElement>) => {
			const value = x.target.value.replaceAll(' ', '_').toUpperCase();
			setInterest(value as SelectBoxOptions);
		};

		useEffect(() => {
			props.onValueChange(interest);
		}, [interest]);

		return (
			<FormInputComponent>
				<SelectBoxInput
					error={props.error}
					ref={ref}
					hasData={interest !== null}
					required={props.required}
					disabled
				/>
				<SelectButton onClick={handleOpenSelect} type="button">
					<DownArrowIcon src={downArrow} alt="Open selection box" />
				</SelectButton>
				{props.label && (
					<InputLabel className={props.value ? 'shrink' : ''}>
						{props.label}
					</InputLabel>
				)}
				<SelectDropDownContainer
					ref={selectRef}
					onChange={handleOptionChange}
					value={interest?.toString()}
				>
					<SelectOption key="Select">Select interest...</SelectOption>
					{getEnumKeys(SelectBoxOptions).map((key, i) => (
						<SelectOption key={i} value={SelectBoxOptions[key]}>
							{key.replaceAll('_', ' ').toLocaleLowerCase()}
						</SelectOption>
					))}
				</SelectDropDownContainer>
			</FormInputComponent>
		);
	}
);

export default SelectBox;
