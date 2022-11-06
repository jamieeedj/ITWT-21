import React, {useEffect, useState} from 'react';
import {addPost as createPost} from '../../api/posts';
import swal2 from '../../utils/swal2';

function useAddPost(cb) {
	// POST ADD MODAL STATE
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};
	// IS LOADING STATE
	const [isLoading, setIsLoading] = useState(false);

	async function addPost(formData) {
		try {
			// INITIAL LOADING STATE
			setIsLoading(true);
			// API CALL
			const data = await createPost(formData);
			const {message} = data;

			toggleModal();

			// CALLBACK TO GET POSTS AFTER ADDING A POST
			cb();

			// swal2('success', `${message}`);
		} catch (error) {
			swal2('error', `${error.message}`);
		}
		setIsLoading(false);
	}

	return {
		addModal: modal,
		toggleAddModal: toggleModal,
		addPost,
		isAdding: isLoading,
	};
}

export default useAddPost;
