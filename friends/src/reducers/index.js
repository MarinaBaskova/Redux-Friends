import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE
} from '../actions';

const initialState = {
	friends: [],
	fetchingData: false,
	loggingIn: false,
	error: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				fetchingData: false,
				loggingIn: true,
				error: ''
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				error: '',
				loggingIn: false
			};
		case FETCH_DATA_START:
			return {
				...state,
				error: '',
				fetchingData: true
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				fetchingData: false,
				error: '',
				friends: [ ...state.friends, ...action.payload ]
			};
		case FETCH_DATA_FAILURE:
			return {
				...state,
				fetchingData: false,
				error: action.payload
			};
		default:
			return state;
	}
};
export default reducer;
