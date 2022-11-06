import React, {useState} from 'react';
import {getPost} from '../../api/posts';
import swal2 from '../../utils/swal2';
import {editPost as editPostData} from '../../api/posts';

function useEditPost(cb) {
	// POST EDIT MODAL STATE
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};
	// IS LOADING STATE FOR FETCHING
	const [isFetching, setIsFetching] = useState(false);
	// FETCHED POST TO EDIT
	const [fetchedPost, setFetchedPost] = useState();

	// IS LOADING STATE FOR EDITING
	const [isEditing, setIsEditing] = useState(false);

	// ID TO EDIT
	const [postIdToEdit, setPostIdToEdit] = useState();

	async function fetchPostToEdit(postIdToView) {
		try {
			// INITIAL LOADING STATE
			setIsFetching(true);
			// API CALL
			const data = await getPost(postIdToView);

			setFetchedPost(data);
			setPostIdToEdit(postIdToView);
		} catch (error) {
			swal2('error', `${error.message}`);
		}
		setIsFetching(false);
	}

	async function editPost(formData) {
		try {
			// INITIAL LOADING STATE
			setIsEditing(true);
			// API CALL
			const data = await editPostData(postIdToEdit, formData);
			const {message} = data;

			toggleModal();

			// FETCH POSTS AGAIN
			cb();

			// swal2('success', `${message}`);
		} catch (error) {
			swal2('error', `${error.message}`);
		}
		setIsEditing(false);
	}

	return {
		editModal: modal,
		toggleEditModal: toggleModal,
		fetchPostToEdit,
		isFetchingPostToEdit: isFetching,
		post: fetchedPost,
		editPost,
		isEditingPost: isEditing,
	};
}

export default useEditPost;
