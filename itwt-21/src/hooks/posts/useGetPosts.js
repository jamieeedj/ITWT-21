import React, {useEffect, useState} from 'react';
import {getPosts} from '../../api/posts';
import swal2 from '../../utils/swal2';

function useGetPosts() {
	// IS LOADING STATE
	const [isLoading, setIsLoading] = useState(false);
	// DATA FETCHED
	const [fetchedPosts, setFetchedPosts] = useState([]);
	// META FETCHED

	async function fetchPosts() {
		try {
			// INITIAL LOADING STATE
			setIsLoading(true);
			// API CALL
			const data = await getPosts();
			const {data: fetchedData, meta: fetchedMeta} = data;

			// STORING FETCHED DATA
			setFetchedPosts(fetchedData);
		} catch (error) {
			swal2('error', `${error.message}`);
		}
		setIsLoading(false);
	}

	useEffect(() => {
		fetchPosts();
	}, []);

	return {
		fetchPosts,
		isFetchingPosts: isLoading,
		posts: fetchedPosts,
	};
}

export default useGetPosts;
