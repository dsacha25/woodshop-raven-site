import React, { forwardRef } from 'react';
import { FormInputProps } from './types';
import { FormInputComponent, Input, InputLabel } from './styles';

const FormInput = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
	return (
		<FormInputComponent>
			<Input ref={ref} {...props} />
			{props.label && (
				<InputLabel className={props.hasData ? 'shrink' : ''}>
					{props.label}
				</InputLabel>
			)}
		</FormInputComponent>
	);
});

export default FormInput;
