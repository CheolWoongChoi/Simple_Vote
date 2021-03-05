import * as React from 'react';
import { ChangeEvent, KeyboardEvent } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '@store';
import { Grid, Button, TextField } from '@material-ui/core';
import { login } from '@store/app';
import styles from './Login.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Login() {
	const { user, loading } = useSelector((state: RootState) => state.app);
	const history = useHistory();
	
	const dispatch = useDispatch();
	const [id, setId] = useState('');

	const handleId = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setId(e.target.value);

	const handleLogin = () => {
		if(!id) {
			alert('아이디를 입력하세요.');
			return;
		}

		dispatch(login(id));
		history.push('/main');
	}

	const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			handleLogin();
		}
	}

	useEffect(() => {
		if (user.id) {
			history.push('/main');
		}
	}, [user, history]);

	useEffect(() => {
		if (loading) {
			setId('로그인 중입니다...');
		}
	}, [loading])

	return (
		<main className={cx('login-wrap')}>
			<Grid container className={cx('container')}>
				<Grid item xs={12} className={cx('grid')}>
					<TextField 
						placeholder='닉네임(ID) 입력' 
						value={id} 
						onChange={handleId} 
						onKeyPress={handleKeyPress}
					/>
				</Grid>
				<Grid item xs={12} className={cx('grid', 'grid-bottom')}>
					<Button variant='contained' color='primary' onClick={handleLogin}>
						투표방 입장하기
					</Button>
				</Grid>
			</Grid>
		</main>
	);
}

export default Login;