import * as React from 'react';
import { useRouteMatch } from 'react-router-dom';
import VoteEdit from 'components/VoteEdit';
import classNames from 'classnames/bind';
import styles from './Add.scss';

const cx = classNames.bind(styles);

function Add() {
	const match = useRouteMatch();

	return (
		<div className={cx('add-wrap')}>
			<VoteEdit />
		</div>
	);
}

export default Add;

