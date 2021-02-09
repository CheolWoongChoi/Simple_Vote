import * as React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import VoteFront from 'components/VoteFront';
import { RootState } from 'store';

function Home(){
	const match = useRouteMatch();
	const { user, votes, isShowMyVote } = useSelector((state: RootState) => state.app);
	const myVotes = votes.filter(v => v.creatorId === user.id);
	
	return (
		<div className='home-wrap'>
			{isShowMyVote ? (
				myVotes.map((vote, idx) => (
					<VoteFront key={idx} vote={vote} matchUrl={match.url} />
				))
			) : (
				votes.map((vote, idx) => (
					<VoteFront key={idx} vote={vote} matchUrl={match.url} />
				))
			)}
		</div>
	)
}

export default Home;