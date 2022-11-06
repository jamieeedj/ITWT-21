import React, {Fragment, useEffect} from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Spinner,
} from 'reactstrap';
import {useFormInitializer} from '../../../utils/useForm';
import Form from '../../../components/form/Form';
import Input from '../../../components/form/Input';

import './Modal.scss';
import {Typography} from '@mui/material';

function PostEditModal(props) {
	const {toggle, modal, onSubmit, fetching, post, isSubmitting} = props;
	const {register, handleSubmit, errors, reset, setValue} =
		useFormInitializer('post');

	// RESETING FORM ON MODAL CLOSE
	useEffect(() => {
		reset();
	}, [toggle, reset]);

	// PRE POPULATING THE EDITING FORM
	useEffect(() => {
		if (post) {
			setValue('title', post.title);
			setValue('message', post.message);
		}
	}, [post, setValue]);

	return (
		<Modal isOpen={modal} toggle={toggle} backdrop='static'>
			<ModalHeader toggle={toggle}>EDIT POST</ModalHeader>
			<ModalBody>
				<Form onSubmit={handleSubmit(onSubmit)}>
					{fetching ? (
						<Spinner></Spinner>
					) : (
						<Fragment>
							<Input
								name='title'
								type='text'
								placeholder='Title'
								register={register}
								errors={errors}
							/>
							<Input
								name='message'
								type='text'
								placeholder='Message'
								register={register}
								errors={errors}
							/>

							<div className='form-actions'>
								<Button type='submit' color='success'>
									{isSubmitting ? <Spinner size='sm'></Spinner> : 'Update'}
								</Button>
								<Button color='secondary' onClick={toggle}>
									Cancel
								</Button>
							</div>
						</Fragment>
					)}
				</Form>
			</ModalBody>
		</Modal>
	);
}

export default PostEditModal;
