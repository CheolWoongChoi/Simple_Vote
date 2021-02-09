import { 
	login, 
	logout,
	toggleCheckMyVote,
	createVote,
	handleVote,
	editVote,
	deleteVote
} from './actions';

export type AppAction = 
	| ReturnType<typeof login>
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
	user: User;
	votes: Vote[];
	isShowMyVote: boolean;
};


