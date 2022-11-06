import {http} from '../utils/http';

export function authSignup(formData) {
	return http('POST', '/auth/signup', formData);
}

export function authLogin(formData) {
	return http('POST', '/auth/login', formData);
}
