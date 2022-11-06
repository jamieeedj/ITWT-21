import React, {useState} from 'react';
import {deletePost as removePost} from '../../api/posts';
import swal2 from '../../utils/swal2';

function useDeletePost(cb) {
	// POST EDIT MODAL STATE
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};
	// IS LOADING STATE FOR DELETING
	const [isLoading, setIsLoading] = useState(false);

	// POST TO DELETE
	const [postId, setPostId] = useState();

	function getPostIdToDelete(postIdToDelete) {
		setPostId(postIdToDelete);
	}

	async function deletePost() {
		try {
			// INITIAL LOADING STATE
			setIsLoading(true);

			// API CALL
			const data = await removePost(postId);
			const {message} = data;

			toggleModal();

			// CALLBACK
			cb();

			// swal2('success', `${message}`);
		} catch (error) {
			swal2('error', `${error.message}`);
		}
		setIsLoading(false);
	}

	return {
		deleteModal: modal,
		toggleDeleteModal: toggleModal,
		postToDelete: getPostIdToDelete,
		deletePost,
		isDeletingPost: isLoading,
	};
}

export default useDeletePost;
