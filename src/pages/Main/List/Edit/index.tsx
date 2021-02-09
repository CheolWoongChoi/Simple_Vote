import * as React from 'react';
import VoteEdit from 'components/VoteEdit';
import classNames from 'classnames/bind';
import styles from './Edit.scss';

const cx = classNames.bind(styles);

function Edit(){
	return (
		<div className={cx('edit-wrap')}>
			<VoteEdit />
		</div>
	);
}

export default Edit;