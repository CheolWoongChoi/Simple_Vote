import * as React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import VoteFront from 'components/VoteFront';
import { RootState } from 'store';

function Home(){
	const match = useRouteMatch();
	const { votes } = useSelector((state: RootState) => state.app);

	return (
		<div className='home-wrap'>
			{votes.map((vote, idx) => (
				<VoteFront key={idx} vote={vote} matchUrl={match.url} />
			))}
		</div>
	)
}

export default Home;