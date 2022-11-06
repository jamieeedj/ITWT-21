import React from 'react';
import PostTable from './PostTable';
import {Button} from '@mui/material';

import './PostsSection.scss';

// HOOKS
import useGetPost from '../../hooks/posts/useGetPosts';
import useAddPost from '../../hooks/posts/useAddPost';
import useViewPost from '../../hooks/posts/useViewPost';
import useEditPost from '../../hooks/posts/useEditPost';
import useDeletePost from '../../hooks/posts/useDeletePost';

// MODALS
import PostViewModal from './modals/PostViewModal';
import PostAddModal from './modals/PostAddModal';
import PostEditModal from './modals/PostEditModal';
import PostDeleteModal from './modals/PostDeleteModal';

function PostsSection() {
	const {fetchPosts, isFetchingPosts, posts} = useGetPost();
	const {addModal, toggleAddModal, addPost, isAdding} = useAddPost(fetchPosts);
	const {
		viewModal,
		toggleViewModal,
		fetchPostToView,
		isFetchingPostToView,
		post,
	} = useViewPost();

	const {
		editModal,
		toggleEditModal,
		fetchPostToEdit,
		isFetchingPostToEdit,
		post: postEdit,
		editPost,
		isEditingPost,
	} = useEditPost(fetchPosts);

	const {
		deleteModal,
		toggleDeleteModal,
		postToDelete,
		deletePost,
		isDeletingPost,
	} = useDeletePost(fetchPosts);

	return (
		<div className='posts-section'>
			<div className='posts-section__content'>
				<div className='post-section__action'>
					<Button variant='contained' color='success' onClick={toggleAddModal}>
						Add Post
					</Button>
				</div>

				<PostAddModal
					toggle={toggleAddModal}
					modal={addModal}
					onSubmit={addPost}
					isSubmitting={isAdding}
				/>

				<PostViewModal
					toggle={toggleViewModal}
					modal={viewModal}
					fetching={isFetchingPostToView}
					post={post}
				/>

				<PostEditModal
					toggle={toggleEditModal}
					modal={editModal}
					fetching={isFetchingPostToEdit}
					post={postEdit}
					onSubmit={editPost}
					isSubmitting={isEditingPost}
				/>

				<PostDeleteModal
					toggle={toggleDeleteModal}
					modal={deleteModal}
					deletePost={deletePost}
					isDeleting={isDeletingPost}
				/>

				<PostTable
					data={posts}
					isLoading={isFetchingPosts}
					fetchPostToView={fetchPostToView}
					toggleViewModal={toggleViewModal}
					fetchPostToEdit={fetchPostToEdit}
					toggleEditModal={toggleEditModal}
					postToDelete={postToDelete}
					toggleDeleteModal={toggleDeleteModal}
				/>
			</div>
		</div>
	);
}

export default PostsSection;
