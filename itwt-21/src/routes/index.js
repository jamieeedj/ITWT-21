import {PAGE_ACCESS} from '../configs/constants';
import home from './home';
import posts from './posts';
import signup from './signup';
import login from './login';
import error from './error';

const routes = [
	{
		...home,
		access: PAGE_ACCESS.public,
	},
	{
		...posts,
		access: PAGE_ACCESS.private,
	},
	{
		...signup,
		access: PAGE_ACCESS.public,
	},
	{
		...login,
		access: PAGE_ACCESS.public,
	},
	{
		...error,
	},
];

export default routes;
