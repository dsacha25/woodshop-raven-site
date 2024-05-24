'use client';

import SectionTitle from '@/components/titles/section-title';
import React, { useEffect, useState } from 'react';
import {
	ContactForm,
	ContactPageContainer,
	SubmitButton,
} from '../../page-styles/contact/styles';
import FormInput from '@/components/inputs/form-input';
import { Form, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../objects/contact/schema';
import FormTextArea from '@/components/inputs/form-text-area';
import { sendEmail } from '@/utils/send-email';
import SelectBox from '@/components/inputs/select-box';
import { ContactFormData, SelectBoxOptions } from './types';

const Contact = () => {
	const {
		register,
		reset,
		watch,
		setValue,
		getValues,
		resetField,
		formState: { errors },
		handleSubmit,
	} = useForm<ContactFormData>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<ContactFormData> = (data) => {
		console.log('FORM DATA: ', data);

		sendEmail(data);
		reset();
		setInterest(null);
	};

	const [interest, setInterest] = useState<SelectBoxOptions | null>(null);

	const handleInterestChange = (value: SelectBoxOptions | null) => {
		setInterest(value);
		if (value) {
			setValue('interest', value.toLocaleLowerCase().replaceAll('_', ' '));
		} else {
			resetField('interest');
		}
	};

	return (
		<ContactPageContainer onSubmit={handleSubmit(onSubmit)}>
			<SectionTitle title="Get A Quote" width="100%" />
			<ContactForm>
				<FormInput
					{...register('name')}
					hasData={!!watch('name')}
					label="Full Name*"
					error={errors.name}
					required
				/>

				<FormInput
					{...register('email')}
					hasData={!!watch('email')}
					label="Email*"
					error={errors.email}
					required
				/>

				<SelectBox
					{...register('interest')}
					value={interest?.toString()}
					onValueChange={handleInterestChange}
					error={errors.interest}
					label="Select Interests*"
					required
				/>

				<FormTextArea
					{...register('description')}
					hasData={!!watch('description')}
					label="Description*"
					error={errors.description}
					required
				/>

				<SubmitButton>Submit</SubmitButton>
			</ContactForm>
		</ContactPageContainer>
	);
};

export default Contact;
