import React, {Fragment} from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Spinner,
} from 'reactstrap';
import Typography from '../../../components/typography/Typography';

import './Modal.scss';

function PostDeleteModal(props) {
	const {toggle, modal, deletePost, isDeleting} = props;

	return (
		<Modal isOpen={modal} toggle={toggle} backdrop='static'>
			<ModalHeader toggle={toggle}>DELETE POST</ModalHeader>
			<ModalBody>
				<Typography type='h5'>
					Are you sure that you want to delete this post?
				</Typography>
			</ModalBody>
			<ModalFooter>
				<div className='form-actions'>
					<Button
						color='danger'
						onClick={() => {
							deletePost();
						}}
					>
						{isDeleting ? <Spinner size='sm'></Spinner> : 'Confirm'}
					</Button>
					<Button color='secondary' onClick={toggle}>
						Close
					</Button>
				</div>
			</ModalFooter>
		</Modal>
	);
}

export default PostDeleteModal;
