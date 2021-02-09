import * as React from 'react';
import { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import Menu from 'components/Menu';
import Add from './add';
import List from './List';
import styles from './Main.scss';

const cx = classNames.bind(styles);

function Main() {
	const { user } = useSelector((state: RootState) => state.app);
	const history = useHistory();
	const match = useRouteMatch();

	useEffect(() => {
		if (!(user?.id)) {
			history.push('/login');
		}
	}, [user]);

	return (
		<main className={cx('main-wrap')}>
			<Grid container className={cx('container')}>
				<Grid item xs={false} md={3} className={cx('left-side')}>
				</Grid>
				<Grid item xs={9} md={6} className={cx('middle-side')}>
					<Switch>
						<Route exact path={`${match.url}`}>
							<Redirect to={`${match.url}/list`} />
						</Route>
						<Route path={`${match.url}/add`} component={Add} />
						<Route path={`${match.url}/list`} component={List} />
						<Redirect to={`${match.url}`} />
					</Switch>
				</Grid>
				<Grid item xs={3} md={3} className={cx('right-side')}>
					<Menu matchUrl={match.url} />
				</Grid>
			</Grid>
		</main>
	);
}

export default Main;