import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Box, Button, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import { RootState } from 'src/store';
import { toggleCheckMyVote, logout } from 'src/store/app';
import classNames from 'classnames/bind';
import styles from './Menu.scss';

const cx = classNames.bind(styles);

type MenuProps = {
	matchUrl: string;
}

function Menu({ matchUrl }: MenuProps) {
	const dispatch = useDispatch();
	const { isShowMyVote } = useSelector((state: RootState) => state.app);

	const handleChangeSwitch = () => dispatch(toggleCheckMyVote(!isShowMyVote));

	const handleLogout = () => {
		if (!confirm('로그아웃 하시겠습니까?')) {
			return;
		}

		sessionStorage.removeItem('authUser');
		dispatch(logout());
	};

	return (
		<Container className={cx('container')}>
			<Box className={cx('box')}>
				<Link to={`${matchUrl}/add`}>
					<Button variant='contained' color='primary'>
						투표 만들기
					</Button>
				</Link>
				<Link to={`${matchUrl}/list`}>
					<Button variant='contained' color='primary'>
						투표목록 보기
					</Button>
				</Link>
				<Button 
					variant='contained' 
					color='primary' 
					className={cx('logout-btn')}
					onClick={handleLogout}
				>
					로그아웃
				</Button>
				<FormGroup row className={cx('form')}>
					<FormControlLabel
						className={cx('label')}
						control={
							<Switch
								checked={isShowMyVote}
								onChange={handleChangeSwitch}
								name='isMyVote'
								color='primary'
							/>
						}
						label='내가 만든 투표 보기'
					/>
				</FormGroup>
			</Box>
		</Container>
	);
}

export default Menu;