
import { AppState, AppAction, User } from './types';
import { 
	LOGIN, 
	TOGGLE_CHECK_MY_VOTE, 
	CREATE_VOTE, 
	HANDLE_VOTE
} from './actions';
import { mockVotes } from 'src/constants';

const initialState: AppState = {
	user: {
		id: JSON.parse(sessionStorage.getItem('authUser') as string)?.id,
		// myVotes: [],
	},
	votes: mockVotes,
	isShowMyVote: false
};

export default function (state: AppState = initialState, action: AppAction) {
	switch(action.type) {
		case LOGIN: {
			return {
				...state,
				user: {
					id: action.payload,
				}
			}
		};
		case TOGGLE_CHECK_MY_VOTE: {
			return {
				...state,
				isShowMyVote: action.payload
			}
		}
		case CREATE_VOTE: {
			return {
				...state,
				votes: [...state.votes, action.payload]
			}
		}
		case HANDLE_VOTE: {
			return {
				...state,
				votes: action.payload
			}
		}
		default:
			return state;
	}
}