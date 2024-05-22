'use client';

import SectionTitle from '@/components/titles/section-title';
import React from 'react';
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

export interface ContactFormData {
	name: string;
	email: string;
	description: string;
}

const Contact = () => {
	const {
		register,
		reset,
		watch,
		formState: { errors },
		handleSubmit,
	} = useForm<ContactFormData>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<ContactFormData> = (data) => {
		console.log(`DATA: ${JSON.stringify(data)}`);

		sendEmail(data);
		// reset();
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
