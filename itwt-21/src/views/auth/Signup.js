import React from 'react';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';
import Typography from '../../components/typography/Typography';
import Form from '../../components/form/Form';

import './Signup.scss';

import {signupForms} from '../../utils/form/renderSignupForms';
import {useFormInitializer} from '../../utils/useForm';
import {useAuth} from '../../contexts/AuthContext';

import LoadingSpinner from '../../components/loadingspinner/LoadingSpinner';
import {Spinner} from 'reactstrap';

function Signup() {
	const {isLoading, signup} = useAuth();

	const {register, handleSubmit, errors, reset} = useFormInitializer('auth');

	const onFormSubmit = (formData) => {
		// AUTH CONTEXT FUNCTION CALL
		signup(formData);
		reset();
	};

	return (
		<div className='signup'>
			<div className='signup-content'>
				{/* {isLoading && <LoadingSpinner />} */}

				<div className='signup-content__heading'>
					<Typography type='h1' className='signup-heading'>
						Sign Up
					</Typography>
				</div>

				<Form
					onSubmit={handleSubmit(onFormSubmit)}
					className='signup-content__form'
				>
					{signupForms.map((item, index) => {
						return (
							<Input
								key={index}
								name={item.name}
								type={item.name}
								placeholder={item.placeholder}
								register={register}
								errors={errors}
							/>
						);
					})}

					<Button type='submit' className='signup-btn'>
						{isLoading ? <Spinner size='sm'></Spinner> : 'Register'}
					</Button>
				</Form>
			</div>
		</div>
	);
}

export default Signup;
