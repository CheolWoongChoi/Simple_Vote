
import { AppState, AppAction } from './types';
import { LOGIN } from './actions';

const initialState: AppState = {
	user: null,
	votes: []
};

export default function (state: AppState = initialState, action: AppAction) {
	switch(action.type) {
		case LOGIN: {
			return {
				...state,
				user: {
					id: action.payload,
					myVotes: [],
					isLogin: true
				}
			}
		}
		default:
			return state;
	}
}