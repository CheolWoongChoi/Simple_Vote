import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './index';

describe('<Login />', () => {
	const initialState = { 
		user: null,
		votes: []
	};
	const mockStore = configureStore();
	const store = mockStore(initialState);	
	const utils = render(
		<Provider store={store}>
			<Login />
		</Provider>
	);
	
	it('user.id가 있다면, main으로 이동해야 한다.', () => {

	});

	it('handleId: 닉네임 값은 수정되어야 한다.', () => {
		const input = utils.getByPlaceholderText('닉네임(ID) 입력') as HTMLInputElement;
		
		fireEvent.change(input, { target: { value: 'abc' } });
		expect(input.value).toBe('abc');
	});

	it('handleLogin: 로그인 처리가 잘 이뤄져야 한다.', () => {
		const input = utils.getByPlaceholderText('닉네임(ID) 입력') as HTMLInputElement;
		const btn = utils.getByText('투표방 입장하기');

		// id 입력
		fireEvent.change(input, { target: { value: 'abc' } });
		fireEvent.click(btn);
		
		// 세션 스토리지 생성
		
		// main 페이지로 이동
	});

});
