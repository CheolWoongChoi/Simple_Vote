import { User, Vote } from 'store/app';

export const initialUser: User = {
	id: JSON.parse(sessionStorage.getItem('authUser') as string)?.id,
};

export const defaultVotes: Vote[] = [
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
	{
		creatorId: 'C',
		voteId: 'c8004ce1',
		voters: [],
		title: '테스트3: 복수투표',
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
		isMultiCheck: true,
		startDate: new Date('2021-02-08T14:35:20.930Z'),
		endDate: new Date('2021-02-27T14:35:00.000Z')
	},
	{
		creatorId: 'D',
		voteId: 'aaaf422e',
		voters: [],
		title: '테스트4: 대기중인 투표',
		items: [
			{
				itemTitle: '항목 1',
				count: 0
			},
			{
				itemTitle: '항목 2',
				count: 0
			},
			{
				itemTitle: '항목 3',
				count: 0
			}
		],
		isMultiCheck: false,
		startDate: new Date('2021-05-15T08:06:00.000Z'),
		endDate: new Date('2021-07-31T08:06:00.000Z')
	}
]

export const initializeVotes = () => {
	const votes: Vote[] | undefined = JSON.parse(localStorage.getItem('votes') as string);

	if (votes) {
		votes.map(v => {
			v.startDate = new Date(v.startDate!);
			v.endDate = new Date(v.endDate!);
		});

		return votes;
	} else {
		return defaultVotes;
	}
}

export const initialVote: Vote = {
	creatorId: '',
	voteId: '',
	voters: [],
	title: '',
	items: [
		{ 
			itemTitle: '',
			count: 0
		},
		{ 
			itemTitle: '',
			count: 0
		},
		{ 
			itemTitle: '',
			count: 0
		}
	],
	isMultiCheck: false,
	startDate: new Date(),
	endDate: new Date(),
};