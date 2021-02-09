import * as React from 'react';
import {
	Box,
  Paper,
	List,
	ListItem,
	ListItemText,
  Divider,
	TextField,
  Button,
	Typography
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { RootState } from 'store';
import classNames from 'classnames/bind';
import styles from './VoteResult.scss';

const cx = classNames.bind(styles);

type Params = {
	id: string;
}

function VoteResult() {
	const history = useHistory();
	const match = useRouteMatch<Params>();
	const { votes } = useSelector((state: RootState) => state.app);
	const vote = votes.find(v => v.voteId === match.params.id)!;

	if (!vote) {
		alert('잘못된 접근입니다.');
		history.push('/main/list');
		return null;
	}
	
	const { voters, title, items } = vote;

	const handleReturn = () => {
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
			<Typography className={cx('voters')} variant='h6'>
				{`투표 인원: ${voters.length}명`}
			</Typography>
			<Typography className={cx('result')} variant='h6'>
				투표 결과
			</Typography>
			<List component='nav' className={cx('list-wrap')}>
				<Divider />
				{items.map((v, idx) => (
					<>
						<ListItem key={idx} className={cx('list-item')}>
							<ListItemText primary={v.itemTitle} className={cx('title')} />
							<ListItemText primary={v.count} className={cx('count')} />
						</ListItem>
						<Divider />
					</>
				))}
			</List>
			<Box className={cx('btn-wrap')}>
				<Button
					color='primary'
					variant='contained'
					onClick={handleReturn}	
				>
					돌아가기
				</Button>
			</Box>
		</Paper>
	);
}

export default VoteResult;