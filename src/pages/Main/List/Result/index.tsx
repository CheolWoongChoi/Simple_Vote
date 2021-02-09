import * as React from 'react';
import { useParams } from 'react-router-dom';
import VoteResult from 'components/VoteResult';
import classNames from 'classnames/bind';
import styles from './Result.scss';

const cx = classNames.bind(styles);

type ResultParams = {
	id: string;
}

function Result() {
	const params = useParams<ResultParams>();

	return(
		<div className={cx('result-wrap')}>
			<VoteResult paramsId={params.id} />
		</div>
	);
}

export default Result;

