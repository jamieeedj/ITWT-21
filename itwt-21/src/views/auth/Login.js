import React from 'react';
import Form from '../../components/form/Form';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';
import Typography from '../../components/typography/Typography';

import './Login.scss';

import {loginForms} from '../../utils/form/renderLoginForms';
import {useFormInitializer} from '../../utils/useForm';
import {useAuth} from '../../contexts/AuthContext';

import LoadingSpinner from '../../components/loadingspinner/LoadingSpinner';
import {Spinner} from 'reactstrap';

function Login() {
	const {isLoading, login} = useAuth();

	const {register, handleSubmit, errors, reset} = useFormInitializer('auth');

	const onFormSubmit = (formData) => {
		// AUTH CONTEXT FUNCTION CALL
		login(formData);
		reset();
	};

	return (
		<div className='login'>
			{/* {isLoading && <LoadingSpinner />} */}
			<div className='login-content'>
				<div className='login-content__heading'>
					<Typography type='h1' className='login-heading'>
						Login
					</Typography>
				</div>

				<Form
					onSubmit={handleSubmit(onFormSubmit)}
					className='login-content__form'
				>
					{loginForms.map((item, index) => {
						return (
							<Input
								key={index}
								name={item.name}
								type={item.type}
								placeholder={item.placeholder}
								register={register}
								errors={errors}
							/>
						);
					})}

					<Button type='submit' className='login-btn'>
						{isLoading ? <Spinner size='sm'></Spinner> : 'Login'}
					</Button>
				</Form>
			</div>
		</div>
	);
}

export default Login;
