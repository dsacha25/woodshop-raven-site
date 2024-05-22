import { ContactFormData } from '@/pages/contact';

export function sendEmail(data: ContactFormData) {
	const apiEnpoint = '/api/email';

	fetch(apiEnpoint, {
		method: 'POST',
		body: JSON.stringify(data),
	})
		.then((res) => res.json())
		.then((response) => {
			alert(response.message);
		})
		.catch((err) => {
			alert(err);
		});
}
