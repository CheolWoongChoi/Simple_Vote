import * as React from 'react';
import VoteResult from '@components/VoteResult';
import classNames from 'classnames/bind';
import styles from './Result.scss';

const cx = classNames.bind(styles);

function Result() {
	return(
		<div className={cx('result-wrap')}>
			<VoteResult />
		</div>
	);
}

export default Result;

