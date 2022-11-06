import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {authFormSchema, postFormSchema} from '../utils/form/schemas/index';

function formType(type) {
	switch (type) {
		case 'auth':
			return authFormSchema;

		case 'post':
			return postFormSchema;

		default:
			break;
	}
}

export const useFormInitializer = (type) => {
	const option = formType(type);

	const {
		register,
		handleSubmit,
		formState: {errors},
		reset,
		setValue,
	} = useForm({resolver: yupResolver(option)});

	return {register, handleSubmit, errors, reset, setValue};
};
