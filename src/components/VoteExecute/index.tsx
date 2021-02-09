import * as React from 'react';
import { useState } from 'react';
import {
	Box,
  Paper,
	FormControlLabel,
  TextField,
	RadioGroup,
	Typography,
  Button,
	Radio,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'store';
import { handleVote } from 'store/app';
import classNames from 'classnames/bind';
import styles from './VoteExecute.scss';

const cx = classNames.bind(styles);

type VoteExecuteProps = {
	paramsId: string;
}

function VoteExecute({ paramsId }: VoteExecuteProps) {
	const dispatch = useDispatch();
	const history = useHistory();
	const { user, votes } = useSelector((state: RootState) => state.app);
	const vote = votes.find(v => v.voteId === paramsId)!;
	const voteIdx = votes.findIndex(v => v.voteId === paramsId);

	if (!vote) {
		alert('잘못된 접근입니다.');
		history.push('/main/list');
		return null;
	}

	const { voters, title, items, isMultiCheck } = vote;
	const [radioSingleIdx, setRadioSingleIdx] = useState(0);
	const [radioMultiIdx, setRadioMultiIdx] = useState(new Array<boolean>(items.length).fill(false));

	const handleRadioMulti = (idx: number) => {
		radioMultiIdx[idx] = !radioMultiIdx[idx];
		setRadioMultiIdx([...radioMultiIdx]);
	};

	const handleVoteFinish = () => {
		let newVotes: any;
		
		if (isMultiCheck) {
			const isVoted = radioMultiIdx.find(v => v ===true);

			if (!isVoted) {
				alert('최소 한 개 항목을 선택해야 합니다.');
				return;
			}

			radioMultiIdx.map((v, idx) => {
				v ? items[idx].count += 1 : '';
			});
		} else {
			items[radioSingleIdx].count += 1;
		}
		
		voters.push(user.id!);
		newVotes = [
			...votes.slice(0, voteIdx), 
			vote, 
			...votes.slice(voteIdx+1, votes.length)
		];

		dispatch(handleVote(newVotes));

		alert('투표를 정상적으로 진행했습니다.');
		history.push('/main/list');
	}

	return (
		<Paper elevation={3} className={cx('vote-wrap')}>
			<TextField 
				className={cx('title')} 
				variant='outlined' 
				multiline
				value={title}
			/>
			{isMultiCheck ? (
				<Typography className={cx('is-multi-text')} variant='subtitle2'>
					* 이 투표는 복수 투표가 가능합니다.
				</Typography>
			) : (
				<Typography className={cx('is-single-text')} variant='subtitle2'>
					* 이 투표는 단일 투표만 가능합니다.
				</Typography>
			)}
			<RadioGroup className={cx('radio-group')}>
				{items.map((v, idx) => {
					if (isMultiCheck) {
						return (
							<FormControlLabel
								key={idx}
								control={(
									<Radio 
										color='primary' 
										checked={radioMultiIdx[idx]} 
										onClick={() => handleRadioMulti(idx)} 
									/>
								)} 
								label={v.itemTitle}
								value={v.itemTitle}
							/>
						); 
					} else {
						return (
							<FormControlLabel
								key={idx}
								control={(
									<Radio 
										color='primary' 
										checked={radioSingleIdx === idx} 
									/>
								)} 
								label={v.itemTitle} 
								value={v.itemTitle}
								onChange={() => setRadioSingleIdx(idx)}
							/>
						);	
					}
				})}
			</RadioGroup>
			<Box className={cx('btn-wrap')}>
				<Button
					color='primary'
					variant='contained'
					onClick={handleVoteFinish}	
				>
					투표 마치기
				</Button>
			</Box>
		</Paper>
	);
}

export default VoteExecute;