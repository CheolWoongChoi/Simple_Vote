import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Button, TextField } from '@material-ui/core';
import { loginThunk } from 'store/app';
import styles from './Login.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Login() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [id, setId] = useState('');
	
	const handleId = (e: any) => setId(e.target.value);

	const handleLogin = () => {
		if(!id) {
			alert('아이디를 입력하세요.');
			return;
		}

		dispatch(loginThunk(id));
		history.push('/main');
	}

	return (
		<main className={cx('login-wrap')}>
			<Grid container className={cx('container')}>
				<Grid item xs={12} className={cx('grid')}>
					<TextField label='닉네임(ID) 입력' value={id} onChange={handleId} />
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