
import { AppState, AppAction } from './types';
import { 
	LOGIN, 
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT,
	TOGGLE_CHECK_MY_VOTE, 
	CREATE_VOTE, 
	HANDLE_VOTE,
	EDIT_VOTE,
	DELETE_VOTE,
} from './actions';
import { initialUser, initializeVotes } from '@constants';

const initialState: AppState = {
	loading: false,
	user: initialUser,
	votes: initializeVotes(),
	isShowMyVote: false,
	errorDesc: '',
};

export default function (state: AppState = initialState, action: AppAction) {
	switch(action.type) {
		case LOGIN: {
			return {
				...state,
				loading: true,
			}
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				loading: false,
				user: {
					id: action.payload,
				}
			}
		}
		case LOGIN_FAILURE: {
			return {
				...state,
				loading: false,
				errorDesc: action.payload
			}
		}
		case LOGOUT: {
			return {
				...state,
				user: {
					id: null
				}
			}
		}
		case TOGGLE_CHECK_MY_VOTE: {
			return {
				...state,
				isShowMyVote: action.payload
			}
		};
		case CREATE_VOTE: {
			return {
				...state,
				votes: action.payload
			}
		};
		case HANDLE_VOTE: {
			return {
				...state,
				votes: action.payload
			}
		};
		case EDIT_VOTE: {
			return {
				...state,
				votes: action.payload
			}
		}
		case DELETE_VOTE: {
			return {
				...state,
				votes: action.payload
			}
		}
		default:
			return state;
	}
}