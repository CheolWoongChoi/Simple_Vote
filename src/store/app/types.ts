import { login } from './actions';

export type AppAction = 
	| ReturnType<typeof login>

export type User = {
	id: string | null;
	myVotes: string[];
	isLogin: boolean;
} | null;

export type Item = {
	itemTitle: string;
	count: number;
}

export type Vote = {
	creatorId: string;
	voteId: string;
	title: string;
	items: Item[];
	isMultiCheck: boolean;
	startDate: Date;
	endDate: Date;
};

export type AppState = {
	user: User;
	votes: Vote[];
};


