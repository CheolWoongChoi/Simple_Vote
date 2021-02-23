import * as React from 'react';
import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
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
import MomentUtils from '@date-io/moment';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from 'src/store';
import { Vote, Item, createVote, editVote, deleteVote } from 'src/store/app';
import { initialVote } from 'src/constants';
import useInputs from 'hooks/useInputs';
import classNames from 'classnames/bind';
import styles from './VoteEdit.scss';

const cx = classNames.bind(styles);

type Params = {
  id: string;
};

function VoteEdit() {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch<Params>();

  const { user, votes } = useSelector((state: RootState) => state.app);
  const isEdit = /\/main\/list\/edit/.test(match.url);
  let vote: Vote;
  let voteIdx: number;

  if (isEdit) {
    vote = votes.find((v) => v.voteId === match.params.id)!;
    voteIdx = votes.findIndex((v) => v.voteId === match.params.id);
  } else {
    vote = initialVote;
  }

  const {
    creatorId: initCreatorId,
    voteId: initVoteId,
    voters: initVoters,
    title: initTitle,
    items: initItems,
    isMultiCheck: initIsMultiCheck,
    startDate: initStartDate,
    endDate: initEndDate,
  } = vote;

  const [form, onChangeForm, resetForm] = useInputs({ title: '' });
  const [title, setTitle] = useState(initTitle);
  const [items, setItems] = useState<Item[]>(initItems);
  const [multiCheck, setMuitiCheck] = useState(initIsMultiCheck);
  const [startDate, setStartDate] = useState<Date | null>(initStartDate);
  const [endDate, setEndDate] = useState<Date | null>(initEndDate);

  const handleItemTitle = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    idx: number
  ) => {
    items[idx].itemTitle = e.target.value;
    setItems([...items]);
  };

  const increaseItem = useCallback(() => {
    if (items.length === 7) {
      alert('항목을 7개까지 추가할 수 있습니다.');
      return;
    }

    setItems((items) => items.concat({ itemTitle: '', count: 0 }));
  }, [items]);

  const decreaseItem = useCallback(() => {
    if (items.length === 3) {
      alert('항목은 최소 3개는 있어야 합니다.');
      return;
    }

    setItems((items) => items.slice(0, items.length - 1));
  }, [items]);

  const handleCreateVote = (e: React.FormEvent<HTMLFormElement>) => {
    const [t0, t1, t2, t3, t4] = uuidv4().split('-');
    e.preventDefault();

    if (startDate! > endDate! || endDate! < new Date()) {
      alert('투표 기간이 올바르지 않습니다.');
      return;
    }

    const newVotes: Vote[] = [
      ...votes,
      {
        creatorId: user.id as string,
        voteId: `${t1}${t2}`,
        voters: [],
        title,
        items,
        isMultiCheck: multiCheck,
        startDate: startDate as Date,
        endDate: endDate as Date,
      },
    ];

    localStorage.setItem('votes', JSON.stringify(newVotes));
    dispatch(createVote(newVotes));

    alert('투표가 생성되었습니다.');
    history.push('/main/list');
  };

  const handleEditVote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!confirm('투표를 수정하시겠습니까?')) {
      return;
    }

    if (startDate! > endDate! || endDate! < new Date()) {
      alert('투표 기간이 올바르지 않습니다.');
      return;
    }

    const newVotes: Vote[] = [
      ...votes.slice(0, voteIdx),
      {
        creatorId: initCreatorId,
        voteId: initVoteId,
        voters: initVoters,
        title,
        items,
        isMultiCheck: multiCheck,
        startDate,
        endDate,
      },
      ...votes.slice(voteIdx + 1, votes.length),
    ];

    localStorage.setItem('votes', JSON.stringify(newVotes));
    dispatch(editVote(newVotes));

    alert('투표가 수정되었습니다.');
    history.push('/main/list');
  };

  const handleDeleteVote = () => {
    if (!confirm('투표를 삭제하시겠습니까?')) {
      return;
    }

    const newVotes = [
      ...votes.slice(0, voteIdx),
      ...votes.slice(voteIdx + 1, votes.length),
    ];

    localStorage.setItem('votes', JSON.stringify(newVotes));
    dispatch(deleteVote(newVotes));

    alert('투표가 삭제되었습니다.');
    history.push('/main/list');
  };

  return (
    <Paper elevation={3} className={cx('vote-wrap')}>
      <form
        className={cx('form-wrap')}
        onSubmit={isEdit ? handleEditVote : handleCreateVote}
      >
        <TextField
          name='title'
          className={cx('input-title')}
          label='제목 입력'
          variant='outlined'
          multiline
          required
          onChange={onChangeForm}
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
        <ButtonGroup
          className={cx('btn-group')}
          size='large'
          variant='contained'
          color='primary'
        >
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
              className={cx('start-date')}
              label='시작일'
              disablePast
              value={startDate}
              onChange={setStartDate}
              showTodayButton
            />
            <DateTimePicker
              className={cx('end-date')}
              label='종료일'
              disablePast
              value={endDate}
              onChange={setEndDate}
              showTodayButton
            />
          </MuiPickersUtilsProvider>
        </Box>
        <Box className={cx('btn-wrap')}>
          {!isEdit && (
            <Button color='primary' variant='contained' type='submit'>
              투표 생성하기
            </Button>
          )}
          {isEdit && (
            <>
              <Button color='primary' variant='contained' type='submit'>
                투표 수정하기
              </Button>
              <Button
                color='primary'
                variant='contained'
                onClick={handleDeleteVote}
              >
                투표 삭제하기
              </Button>
            </>
          )}
        </Box>
      </form>
    </Paper>
  );
}

export default VoteEdit;
