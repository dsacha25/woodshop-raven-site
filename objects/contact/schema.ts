import { ContactFormData, SelectBoxOptions } from '@/pages/contact/types';
import getEnumKeys from '@/utils/enums/get-enum-keys';
import * as yup from 'yup';

const schema = yup.object<ContactFormData>().shape({
	name: yup.string().required('Name is required'),
	email: yup.string().email('Invalid Email').required('Email is required'),
	interest: yup.string().required(),
	description: yup
		.string()
		.required("Please describe what you're looking for."),
});

export default schema;
