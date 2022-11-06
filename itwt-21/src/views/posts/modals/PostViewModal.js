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

function PostViewModal(props) {
	const {toggle, modal, fetching, post} = props;

	return (
		<Modal isOpen={modal} toggle={toggle} backdrop='static'>
			<ModalHeader toggle={toggle}>VIEW POST</ModalHeader>
			<ModalBody>
				{fetching ? (
					<Spinner></Spinner>
				) : (
					<Fragment>
						<Typography type='h1'>{post.title}</Typography>
						<Typography type='h4'>{post.message}</Typography>
					</Fragment>
				)}
			</ModalBody>
			<ModalFooter>
				<div className='form-actions'>
					<Button color='secondary' onClick={toggle}>
						Close
					</Button>
				</div>
			</ModalFooter>
		</Modal>
	);
}

export default PostViewModal;
