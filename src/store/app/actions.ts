import { Vote } from 'store/app';

export const LOGIN = 'LOGIN' as const;
export const TOGGLE_CHECK_MY_VOTE = 'TOGGLE_CHECK_MY_VOTE' as const; 
export const CREATE_VOTE = 'CREATE_VOTE' as const;
export const HANDLE_VOTE = 'HANDLE_VOTE' as const; 

export const login = (id: string) => ({
	type: LOGIN,
	payload: id
});

export const toggleCheckMyVote = (check: boolean) => ({
	type: TOGGLE_CHECK_MY_VOTE,
	payload: check
});

export const createVote = (vote: Vote) => ({
	type: CREATE_VOTE,
	payload: vote
});

export const handleVote = (votes: Vote[]) => ({
	type: HANDLE_VOTE,
	payload: votes
});

