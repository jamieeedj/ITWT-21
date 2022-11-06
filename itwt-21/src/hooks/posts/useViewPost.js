import React, {useState} from 'react';
import {getPost} from '../../api/posts';
import swal2 from '../../utils/swal2';

function useViewPost() {
	// POST VIEW MODAL STATE
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};
	// IS LOADING STATE
	const [isLoading, setIsLoading] = useState(false);

	// FETCHED POST
	const [fetchedPost, setFetchedPost] = useState({});

	async function fetchPostToView(postIdToView) {
		try {
			// INITIAL LOADING STATE
			setIsLoading(true);
			// API CALL
			const data = await getPost(postIdToView);

			setFetchedPost(data);
		} catch (error) {
			swal2('error', `${error.message}`);
		}
		setIsLoading(false);
	}

	return {
		viewModal: modal,
		toggleViewModal: toggleModal,
		fetchPostToView,
		isFetchingPostToView: isLoading,
		post: fetchedPost,
	};
}

export default useViewPost;
