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

function PostAddModal(props) {
	const {toggle, modal, onSubmit, isSubmitting} = props;
	const {register, handleSubmit, errors, reset} = useFormInitializer('post');

	// RESETING FORM ON MODAL CLOSE
	useEffect(() => {
		reset();
	}, [toggle, reset]);

	return (
		<Modal isOpen={modal} toggle={toggle} backdrop='static'>
			<ModalHeader toggle={toggle}>ADD POST</ModalHeader>
			<ModalBody>
				<Form onSubmit={handleSubmit(onSubmit)}>
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
							{isSubmitting ? (
								<Spinner size='sm' data-testid='login-spinner'></Spinner>
							) : (
								'Create'
							)}
						</Button>
						<Button color='secondary' onClick={toggle}>
							Cancel
						</Button>
					</div>
				</Form>
			</ModalBody>
		</Modal>
	);
}

export default PostAddModal;
