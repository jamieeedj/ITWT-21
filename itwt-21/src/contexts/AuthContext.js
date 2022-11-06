import React, {createContext, useContext, useState} from 'react';
import {authLogin, authSignup} from '../api/auth';

import cookies from '../utils/cookies';
import {AUTH_COOKIE_NAME} from '../configs/constants';

import swal2 from '../utils/swal2';

const AuthContext = createContext();

function AuthContextProvider(props) {
	const {children} = props;

	const [isLoading, setIsLoading] = useState(false);
	const [isAuth, setIsAuth] = useState(!!cookies.get(AUTH_COOKIE_NAME));

	const signup = async (formData) => {
		try {
			// INITIAL LOADING STATE
			setIsLoading(true);
			// SIGNUP API CALL
			const data = await authSignup(formData);
			const {message} = data;

			swal2('success', `${message}`);
		} catch (error) {
			swal2('error', `${error.message}`);
		}
		setIsLoading(false);
	};

	const login = async (formData) => {
		try {
			// INITIAL LOADING STATE
			setIsLoading(true);
			// LOGIN API CALL
			const {data} = await authLogin(formData);
			const {token} = data;

			// SET EXPIRATION DATE
			const today = new Date();
			today.setHours(today.getHours() + 2);

			// EXTRACT TOKEN AND APPEND IN THE COOKIE
			cookies.set(AUTH_COOKIE_NAME, token, {expires: today});

			// SET AUTH TO TRUE
			setIsAuth(true);

			swal2('success', 'Successfully logged in.');
		} catch (error) {
			swal2('error', `${error.message}`);
		}
		setIsLoading(false);
	};

	const logout = () => {
		cookies.remove(AUTH_COOKIE_NAME);
		setIsAuth(false);
	};

	const authContext = {
		isLoading,
		isAuth,
		signup,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
	);
}

const useAuth = () => useContext(AuthContext);

export {AuthContext, AuthContextProvider, useAuth};
