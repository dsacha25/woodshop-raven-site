import * as yup from 'yup';
import { ContactFormData } from '../../pages/contact';

const schema = yup.object<ContactFormData>().shape({
	name: yup.string().required('Name is required'),
	email: yup.string().email('Invalid Email').required('Email is required'),
	description: yup
		.string()
		.required("Please describe what you're looking for."),
});

export default schema;
