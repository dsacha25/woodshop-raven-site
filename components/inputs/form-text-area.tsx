import React, { forwardRef } from 'react';
import { FormInputProps } from './types';
import { FormInputComponent, TextAreaLabel, TextAreaInput } from './styles';
import { roboto } from './form-input';

const FormTextArea = forwardRef<HTMLInputElement, FormInputProps>(
	(props, ref) => {
		return (
			<FormInputComponent height={'180px'}>
				<TextAreaInput className={roboto.className} ref={ref} {...props} />
				{props.label && (
					<TextAreaLabel className={props.data ? 'shrink' : ''}>
						{props.label}
					</TextAreaLabel>
				)}
			</FormInputComponent>
		);
	}
);
export default FormTextArea;
