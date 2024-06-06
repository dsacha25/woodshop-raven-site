'use client';

import React, { forwardRef } from 'react';
import { FormInputProps } from './types';
import { FormInputComponent, Input, InputLabel } from './styles';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({ subsets: ['latin'], weight: '300' });

const FormInput = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
	return (
		<FormInputComponent>
			<Input className={roboto.className} ref={ref} {...props} />
			{props.label && (
				<InputLabel className={props.data ? 'shrink' : ''}>
					{props.label}
				</InputLabel>
			)}
		</FormInputComponent>
	);
});

export default FormInput;
