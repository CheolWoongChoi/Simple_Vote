import * as React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as moment from 'moment'; 
import {
	Box,
  Paper,
  TextField,
	Typography,
  Button
} from '@material-ui/core';
import { RootState } from 'store';
import { Vote } from 'store/app';
import classNames from 'classnames/bind';
import styles from './VoteFront.scss';

const cx = classNames.bind(styles);

type VoteFrontProps = {
	vote: Vote;
	matchUrl: string;
}

function VoteFront({ vote, matchUrl }: VoteFrontProps) {
	const history = useHistory();
	const { user } = useSelector((state: RootState) => state.app);
	const { creatorId, voteId, voters, title, startDate, endDate } = vote;

	const startDateFormat = moment(startDate).format('YYYY년 MM월 DD일 A hh시 mm분');
	const endDateFormat = moment(endDate).format('YYYY년 MM월 DD일 A hh시 mm분');
	const isProgress = startDate < new Date() && new Date() < endDate;
	const isWaiting = startDate > new Date();

	const handleVote = () => {
		if (voters.find(v => v === user.id)) {
			alert('이미 투표를 진행하셨습니다.');
			return;
		}

		history.push(`${matchUrl}/vote/${voteId}`);
	}

	const handleResult = () => {
		history.push(`${matchUrl}/result/${voteId}`);
	}

	return (
		<Paper elevation={3} className={cx('vote-wrap')}>
			<TextField 
				className={cx('title')} 
				variant='outlined' 
				multiline
				value={title}
			/>
			<Typography className={cx('creator')} variant='h6'>
				{`투표 생성자: ${creatorId}`}
			</Typography>
			<Typography className={cx('start-date')} variant='h6'>
				{`투표 시작일: ${startDateFormat}`}
			</Typography>
			<Typography className={cx('end-date')} variant='h6'>
				{`투표 종료일: ${endDateFormat}`}
			</Typography>
			<Typography 
				className={
					cx(
						'is-progress', 
						{'progress': isProgress}, 
						{'waiting': isWaiting && !isProgress}, 
						{'end': !isWaiting && !isProgress}
					)} 
				variant='h6'
			>
				{isProgress ? '현재 진행중' : isWaiting ? '대기중' : '투표 종료'}
			</Typography>
			<Box className={cx('btn-wrap')}>
				{isProgress && (
					<Button 
						color='primary' 
						variant='contained'
						onClick={handleVote}
					>
						투표하기
					</Button>
				)}
				<Button 
					color='primary' 
					variant='contained'
					onClick={handleResult}	
				>
					결과보기
				</Button>
			</Box>
		</Paper>
	);
}

export default VoteFront;