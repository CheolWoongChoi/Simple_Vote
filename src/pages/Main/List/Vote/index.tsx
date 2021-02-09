import * as React from 'react';
import VoteExecute from 'components/VoteExecute';
import classNames from 'classnames/bind';
import styles from './Vote.scss';

const cx = classNames.bind(styles);

function Vote(){
	return (
		<div className={cx('vote-wrap')}>
			<VoteExecute />
		</div>
	);
}

export default Vote;