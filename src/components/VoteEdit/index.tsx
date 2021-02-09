import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	Box,
  Paper,
  FormControlLabel,
  TextField,
  RadioGroup,
  ButtonGroup,
  Button,
  Radio,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import '@date-io/date-fns';
import MomentUtils from "@date-io/moment";
import { v4 as uuidv4 } from 'uuid';
import { RootState } from 'src/store';
import { Item, createVote } from 'src/store/app';
import classNames from 'classnames/bind';
import styles from './VoteEdit.scss';

const cx = classNames.bind(styles);

function VoteEdit() {
	const dispatch = useDispatch();
	const history = useHistory();

	const [title, setTitle] = useState('');
  const [items, setItems] = useState<Item[]>([
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
		},
	]);
	const [multiCheck, setMuitiCheck] = useState(false);
	const [endDate, setEndDate] = useState<Date | null>(new Date());
	const { user } = useSelector((state: RootState) => state.app);

	const handleItemTitle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, idx: number) => {
		items[idx].itemTitle = e.target.value;
		setItems([...items]);
	}

	const increaseItem = () => {
		if (items.length === 7) {
			alert('항목을 7개까지 추가할 수 있습니다.');
			return;
		}

		setItems(items => items.concat({ itemTitle: '', count: 0}));
	};

	const decreaseItem = () => {
		if (items.length === 3) {
			alert('항목은 최소 3개는 있어야 합니다.');
			return;
		}

		setItems(items => items.slice(0, items.length-1));
	};

	const handleCreateVote = (e: React.FormEvent<HTMLFormElement>) => {
		const [t0, t1, t2, t3, t4] = uuidv4().split('-');
		e.preventDefault();

		if (endDate! < new Date()) {
			alert('투표 종료 시간이 올바르지 않습니다.');
			return;
		}
		
		dispatch(
			createVote({
				creatorId: user?.id as string,
				voteId: `${t1}${t2}`,
				voters: [],
				title,
				items,
				isMultiCheck: multiCheck,
				startDate: new Date(),
				endDate: endDate as Date
			})
		);

		alert('투표가 생성되었습니다.');
		history.push('/main/list');
	};

	const modifyVote = () => {};

  return (
    <Paper elevation={3} className={cx('vote-wrap')}>
      <form className={cx('form-wrap')} onSubmit={handleCreateVote}>
				<TextField 
					className={cx('input-title')} 
					label='제목 입력' 
					variant='outlined' 
					multiline
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				{items.map((v, i) => (
					<TextField 
						key={i}
						className={cx('input-item')} 
						label='항목 입력' 
						value={v.itemTitle}
						variant='outlined' 
						size='small'
						required
						onChange={(e) => handleItemTitle(e, i)}
					/>
				))}
				<ButtonGroup className={cx('btn-group')} size='large' variant='contained' color='primary'>
					<Button onClick={increaseItem}>+</Button>
					<Button onClick={decreaseItem}>-</Button>
				</ButtonGroup>
				<RadioGroup className={cx('radio-group')}>
					<FormControlLabel 
						control={<Radio color='primary' checked={!multiCheck} />} 
						label='단일 투표' 
						onChange={() => setMuitiCheck(false)}
					/>
					<FormControlLabel 
						control={<Radio color='primary' checked={multiCheck} />} 
						label='복수 투표' 
						onChange={() => setMuitiCheck(true)}
					/>
				</RadioGroup>
				<Box className={cx('date-wrap')}>
					<MuiPickersUtilsProvider utils={MomentUtils} locale='ko'>
						<DateTimePicker
							label='기간 설정'
							disablePast
							value={endDate}
							onChange={setEndDate}
							showTodayButton
						/>
					</MuiPickersUtilsProvider>
				</Box>
				<Box className={cx('btn-wrap')}>
					<Button 
						color='primary' 
						variant='contained' 
						type='submit'
					>
						투표 생성하기
					</Button>
					<Button 
						color='primary' 
						variant='contained'
					>
						투표 수정하기
					</Button>
				</Box>
			</form>
    </Paper>
  );
}

export default VoteEdit;
