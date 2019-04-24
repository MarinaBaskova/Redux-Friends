import axios from 'axios';
import axiosWithAuth from '../auth/axiosAuth';

// Login Action
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credent) => (dispatch) => {
	dispatch({ type: LOGIN_START });
	return axios
		.post('http://localhost:5000/api/login', credent)
		.then((res) => {
			console.log('LOGIN RES IS ', res);
			localStorage.setItem('token', res.data.payload);
			dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
		})
		.catch((err) => {
			console.log(err);
			dispatch({ type: LOGIN_FAILURE, payload: err });
		});
};

// GET DATA Action
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getFriends = () => (dispatch) => {
	dispatch({ type: FETCH_DATA_START });
	axiosWithAuth()
		.get('http://localhost:5000/api/friends')
		.then((res) => {
			console.log('SERVER RESPONSE IS: ', res);
			dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log(err);
			dispatch({ type: FETCH_DATA_FAILURE, payload: err });
		});
};
