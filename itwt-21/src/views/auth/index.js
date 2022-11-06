import React from 'react';
import {useLocation} from 'react-router-dom';

import PublicPage from '../../components/pages/PublicPage';
import Login from './Login';
import Signup from './Signup';

function Index() {
	const location = useLocation();

	let content;
	if (location.pathname === '/signup') {
		content = <Signup />;
	} else if (location.pathname === '/login') {
		content = <Login />;
	}

	return <PublicPage header={true}>{content}</PublicPage>;
}

export default Index;
