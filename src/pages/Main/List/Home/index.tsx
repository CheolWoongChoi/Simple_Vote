import * as React from 'react';
import { useSelector } from 'react-redux';
import VoteFront from 'components/VoteFront';
import { RootState } from 'store';
import classNames from 'classnames/bind';
import styles from './Home.scss';

const cx = classNames.bind(styles);

function Home(){
	const { user, votes, isShowMyVote } = useSelector((state: RootState) => state.app);
	const myVotes = votes.filter(v => v.creatorId === user.id);
	
	return (
		<div className={cx('home-wrap')}>
			{isShowMyVote ? (
				myVotes.map((vote, idx) => (
					<VoteFront key={idx} vote={vote} />
				))
			) : (
				votes.map((vote, idx) => (
					<VoteFront key={idx} vote={vote} />
				))
			)}
		</div>
	)
}

export default Home;