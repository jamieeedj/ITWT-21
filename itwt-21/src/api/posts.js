import {http} from '../utils/http';

export function addPost(formData) {
	return http('POST', '/post', formData);
}

export function getPosts() {
	return http('GET', '/post');
}

export function getPost(postId) {
	return http('GET', `/post/${postId}`);
}

export function editPost(postId, formData) {
	return http('PUT', `/post/${postId}`, formData);
}

export function deletePost(postId) {
	return http('DELETE', `/post/${postId}`);
}
