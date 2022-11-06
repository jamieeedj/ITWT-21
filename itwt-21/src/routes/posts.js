import loadable from '@loadable/component';

// POSTS VIEW
import Posts from '../views/posts/index';

const posts = {
	path: '/posts',
	element: <Posts />,
};

export default posts;

// loadable(() => import('../views/posts/index.js'))
