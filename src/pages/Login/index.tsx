import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Grid, Button, TextField } from '@material-ui/core';
import { login } from 'store/app';
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

		dispatch(login(id));
		history.push('/main');
	}

	return (
		<main className={cx('login-wrap')}>
			<Container className={cx('container')}>
				<Grid>
					<TextField label='아이디 입력' value={id} onChange={handleId} />
				</Grid>
				<Grid className={cx('grid-bottom')}>
					<Button variant='contained' color='primary' onClick={handleLogin}>
						투표방 입장하기
					</Button>
				</Grid>
			</Container>
		</main>
	);
}

export default Login;