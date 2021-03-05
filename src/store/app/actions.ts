import { Vote } from '@store/app';

export const LOGIN = 'LOGIN' as const;
export const LOGOUT = 'LOGOUT' as const;
export const TOGGLE_CHECK_MY_VOTE = 'TOGGLE_CHECK_MY_VOTE' as const; 
export const CREATE_VOTE = 'CREATE_VOTE' as const;
export const HANDLE_VOTE = 'HANDLE_VOTE' as const; 
export const EDIT_VOTE = 'EDIT_VOTE' as const;
export const DELETE_VOTE = 'DELETE_VOTE' as const; 

export const login = (id: string) => ({
	type: LOGIN,
	payload: id
});

export const logout = () => ({
	type: LOGOUT
});

export const toggleCheckMyVote = (check: boolean) => ({
	type: TOGGLE_CHECK_MY_VOTE,
	payload: check
});

export const createVote = (votes: Vote[]) => ({
	type: CREATE_VOTE,
	payload: votes
});

export const handleVote = (votes: Vote[]) => ({
	type: HANDLE_VOTE,
	payload: votes
});

export const editVote = (votes: Vote[]) => ({
	type: EDIT_VOTE,
	payload: votes
});

export const deleteVote = (votes: Vote[]) => ({
	type: DELETE_VOTE,
	payload: votes
});