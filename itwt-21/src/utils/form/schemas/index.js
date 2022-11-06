import * as yup from 'yup';

export const authFormSchema = yup.object().shape({
	email: yup
		.string()
		.required('Please enter an email.')
		.email('Must be a valid email.'),
	password: yup.string().required('Please enter a password.').min(5),
});

export const postFormSchema = yup.object().shape({
	title: yup.string().required('Please enter a title.'),
	message: yup.string().required('Please enter a message.'),
});
