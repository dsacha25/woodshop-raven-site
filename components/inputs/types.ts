import { ComponentPropsWithRef } from 'react';
import { FieldError } from 'react-hook-form';

export interface FormInputProps extends ComponentPropsWithRef<'input'> {
	label?: string;
	error?: FieldError | string;
	margin?: string;
	hasData?: boolean;
}
