import React from 'react';
import SectionTitle from '@/components/titles/section-title';
import { ContactPageContainer } from './styles';
import ContactForm from '@/components/forms/contact-form';
import { Metadata } from 'next';
import getEnumKeys from '@/utils/enums/get-enum-keys';
import { SelectBoxOptions } from '@/types/contact/types';

interface Props {
	params: { contact: string[] };
}

export const metadata: Metadata = {
	title: 'Contact',
};

export const generateStaticParams = () => {
	return getEnumKeys(SelectBoxOptions).map((key) => key);
};

const Contact = ({ params }: Props) => {
	return (
		<ContactPageContainer>
			<SectionTitle title="Get A Quote" width="100%" />
			<ContactForm category={params.contact[1]} />
		</ContactPageContainer>
	);
};

export default Contact;
