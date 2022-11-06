import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';

function PublicRoute(props) {
	const {children} = props;
	const {isAuth} = useAuth();

	return !isAuth ? children : <Navigate replace={true} to='/posts' />;
}

export default PublicRoute;
