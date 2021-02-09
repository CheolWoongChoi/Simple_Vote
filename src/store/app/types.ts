import { 
	login, 
	toggleCheckMyVote,
	createVote,
	handleVote
} from './actions';

export type AppAction = 
	| ReturnType<typeof login>
	| ReturnType<typeof toggleCheckMyVote>
	| ReturnType<typeof createVote>
	| ReturnType<typeof handleVote>

export type User = {
	id: string | null;
	// myVotes: string[];
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
	startDate: Date;
	endDate: Date;
};

export type AppState = {
	user: User;
	votes: Vote[];
	isShowMyVote: boolean;
};


