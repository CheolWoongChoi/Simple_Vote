import * as React from 'react';
import { useParams } from 'react-router-dom';
import VoteExecute from 'components/VoteExecute';
import classNames from 'classnames/bind';
import styles from './Vote.scss';

const cx = classNames.bind(styles);

type VoteParams = {
	id: string;
}

function Vote(){
	const params = useParams<VoteParams>();

	return (
		<div className={cx('vote-wrap')}>
			<VoteExecute paramsId={params.id} />
		</div>
	);
}

export default Vote;