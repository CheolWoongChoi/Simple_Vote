import { 
	login, 
	logout,
	toggleCheckMyVote,
	createVote,
	handleVote,
	editVote,
	deleteVote,
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from './actions';

export type AppAction = 
	| ReturnType<typeof login>
	| { type: typeof LOGIN_SUCCESS, payload: string }
	| { type: typeof LOGIN_FAILURE, payload: string }
	| ReturnType<typeof logout>
	| ReturnType<typeof toggleCheckMyVote>
	| ReturnType<typeof createVote>
	| ReturnType<typeof handleVote>
	| ReturnType<typeof editVote>
	| ReturnType<typeof deleteVote>

export type User = {
	id: string | null;
};

export type Item = {
	itemTitle: string;
	count: number;
}

export type Vote = {
	creatorId: string;
	voteId: string;
	voters: string[];
	title: string;
	items: Item[];
	isMultiCheck: boolean;
	startDate: Date | null;
	endDate: Date | null;
};

export type AppState = {
	loading: boolean;
	user: User;
	votes: Vote[];
	isShowMyVote: boolean;
	errorDesc: string;
};


