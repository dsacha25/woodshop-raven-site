import React, { forwardRef } from 'react';
import { FormInputProps } from './types';
import { FormInputComponent, TextAreaLabel, TextAreaInput } from './styles';

const FormTextArea = forwardRef<HTMLInputElement, FormInputProps>(
	(props, ref) => {
		return (
			<FormInputComponent height={'180px'}>
				<TextAreaInput ref={ref} {...props} />
				{props.label && (
					<TextAreaLabel className={props.hasData ? 'shrink' : ''}>
						{props.label}
					</TextAreaLabel>
				)}
			</FormInputComponent>
		);
	}
);
export default FormTextArea;
