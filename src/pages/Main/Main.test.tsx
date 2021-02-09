import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import Main from './index';

describe('<Main />', () => {
	const initialState = { 
		user: null,
		votes: []
	};
	const mockStore = configureStore();
	const store = mockStore(initialState);	
	const utils = render(
		<Provider store={store}>
			<Main />
		</Provider>
	);

	it('user.id가 없다면, 로그인 화면으로 이동해야 한다.');

	it('화면을 잘 띄워야 된다???', () => {

	});

	it('/main pathname이 되어야 한다.', () => {

	});
		
});
