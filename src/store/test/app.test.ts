import {
	LOGIN, 
	LOGOUT, 
	TOGGLE_CHECK_MY_VOTE, 
	CREATE_VOTE, 
	HANDLE_VOTE, 
	EDIT_VOTE, 
	DELETE_VOTE,
	login,
	logout,
	toggleCheckMyVote,
	createVote,
	handleVote,
	editVote,
	deleteVote
} from '@store/app/actions';
import { default as appReducer, User, Vote } from '@store/app';

describe('app in store', () => {
	const mockData = {
		id: 'id',
		check: false,
		votes: [
			{
				creatorId: 'A',
				voteId: '53e74047',
				voters: [],
				title: '테스트1: 투표 종료',
				items: [
					{
						itemTitle: '항목1',
						count: 0
					},
					{
						itemTitle: '항목2',
						count: 0
					},
					{
						itemTitle: '항목3',
						count: 0
					}
				],
				isMultiCheck: false,
				startDate: new Date('2021-02-03T10:48:15.001Z'),
				endDate: new Date('2021-02-05T10:48:00.000Z')
			},
			{
				creatorId: 'B',
				voteId: '43a24912',
				voters: [],
				title: '테스트2: 투표중',
				items: [
					{
						itemTitle: '항목1',
						count: 0
					},
					{
						itemTitle: '항목2',
						count: 0
					},
					{
						itemTitle: '항목3',
						count: 0
					}
				],
				isMultiCheck: false,
				startDate: new Date('2021-02-08T10:48:39.477Z'),
				endDate: new Date('2021-02-20T10:48:00.000Z')
			},

		]
	};
	const { id, check, votes } = mockData;
	
	describe('actions', () => {
		it ('create actionObjects', () => {
			const expectedActions = [
				{ type: LOGIN, payload: id},
				{ type: LOGOUT },
				{ type: TOGGLE_CHECK_MY_VOTE, payload: check },
				{ type: CREATE_VOTE, payload: votes },
				{ type: HANDLE_VOTE, payload: votes },
				{ type: EDIT_VOTE, payload: votes },
				{ type: DELETE_VOTE, payload: votes },
			];

			const actions = [
				login(id),
				logout(),
				toggleCheckMyVote(check),
				createVote(votes),
				handleVote(votes),
				editVote(votes),
				deleteVote(votes)
			];

			expect(actions).toEqual(expectedActions);
		});
	});

	describe('reducer', () => {
		const initialState = {
			loading: false,
			user: { id: null } as User,
			votes: [] as Vote[],
			isShowMyVote: false,
			errorDesc: ''
		};
		let state = initialState;
		
		it('login: user.id becomes string', () => {
			state = appReducer(state, login(id));
			
			expect(state.user.id).toBe(id);
		});

		it('logout: user.id becomes null', () => {
			state = appReducer(state, logout());

			expect(state.user.id).toBe(null);
		})

		it('toggleCheckMyVote 1: isShowMyVote becomes true', () => {
			state = appReducer(state, toggleCheckMyVote(true));
		
			expect(state.isShowMyVote).toBe(true);
		});

		it('toggleCheckMyVote 2: isShowMyVote becomes false', () => {
			state = appReducer(state, toggleCheckMyVote(false));
		
			expect(state.isShowMyVote).toBe(false);
		});

		it('createVote: updates new votes', () => {
			state = appReducer(state, createVote(votes));

			expect(state.votes).toEqual(votes);
		});

		it('handleVote: updates new votes', () => {
			state.votes = [];
			state = appReducer(state, handleVote(votes));

			expect(state.votes).toEqual(votes);
		});

		it('editVote: updates new votes', () => {
			state.votes = [];
			state = appReducer(state, editVote(votes));

			expect(state.votes).toEqual(votes);
		});

		it('deleteVote: updates new votes', () => {
			state.votes = [];
			state = appReducer(state, deleteVote(votes));

			expect(state.votes).toEqual(votes);
		});
	});
});