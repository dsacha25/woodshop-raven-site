'use client';
import React, { useEffect, useState } from 'react';
import { ContactFormContainer, SubmitButton } from './styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactFormData, SelectBoxOptions } from '@/types/contact/types';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '@/objects/contact/schema';
import FormInput from '../inputs/form-input';
import SelectBox from '../inputs/select-box';
import FormTextArea from '../inputs/form-text-area';
import { sendEmail } from '@/utils/send-email';

type Props = {
	category?: string;
};

const ContactForm = ({ category }: Props) => {
	const [interest, setInterest] = useState<SelectBoxOptions | null>(null);

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

	useEffect(() => {
		if (category) {
			setValue('interest', category);
			setInterest(category.toUpperCase() as SelectBoxOptions);
		}
	}, [category]);

	const handleInterestChange = (value: SelectBoxOptions | null) => {
		setInterest(value);
		if (value) {
			setValue('interest', value.toLocaleLowerCase().replaceAll('_', ' '));
		} else {
			resetField('interest');
		}
	};

	const onSubmit: SubmitHandler<ContactFormData> = (data) => {
		sendEmail(data);
		reset();
		setInterest(null);
	};

	return (
		<ContactFormContainer onSubmit={handleSubmit(onSubmit)}>
			<FormInput
				{...register('name')}
				data={!!watch('name')}
				label="Full Name*"
				error={errors.name}
				required
			/>
			<FormInput
				{...register('email')}
				data={!!watch('email')}
				label="Email*"
				error={errors.email}
				required
			/>

			<SelectBox
				{...register('interest')}
				value={interest?.toString()}
				onValueChange={handleInterestChange}
				error={errors.interest}
				label="Select Interest*"
				required
			/>

			<FormTextArea
				{...register('description')}
				data={!!watch('description')}
				label="Description*"
				error={errors.description}
				required
			/>

			<SubmitButton>Submit</SubmitButton>
		</ContactFormContainer>
	);
};

export default ContactForm;
