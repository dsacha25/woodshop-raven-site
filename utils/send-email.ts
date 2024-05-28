import { ContactFormData } from '@/types/contact/types';

export function sendEmail(data: ContactFormData) {
	const apiEndpoint = '/api/email';

	fetch(apiEndpoint, {
		method: 'POST',
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((response) => {
			alert('Message sent!');
		})
		.catch((err) => {
			console.log('Error', err);

			alert(err);
		});
}
