import axios from 'axios';
import {AUTH_COOKIE_NAME} from '../configs/constants';
import {API_URL} from '../configs/environment';
import cookies from './cookies';

// SETTING AUTHORIZATION HEADER WITH TOKEN FROM COOKIE
axios.interceptors.request.use((config) => {
	if (cookies.get(AUTH_COOKIE_NAME)) {
		config.headers.Authorization = `Bearer ${cookies.get(AUTH_COOKIE_NAME)}`;
	}
	return config;
});

export async function http(method, endpoint, formData) {
	if (method === 'GET') {
		const response = await axios.get(`${API_URL}${endpoint}`);
		const {data} = response;
		return data;
	}
	if (method === 'POST') {
		const response = await axios.post(`${API_URL}${endpoint}`, formData);
		const {data} = response;
		return data;
	}
	if (method === 'PUT') {
		const response = await axios.put(`${API_URL}${endpoint}`, formData);
		const {data} = response;
		return data;
	}
	if (method === 'DELETE') {
		const response = await axios.delete(`${API_URL}${endpoint}`);
		const {data} = response;
		return data;
	}
}

// FETCH API
// const response = await fetch(`${API_URL}${endpoint}`, {
// 	method,
// 	body: JSON.stringify(formData),
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// });

// const responseData = await response.json();

// if (!response.ok) {
// 	throw new Error(responseData.message);
// }
