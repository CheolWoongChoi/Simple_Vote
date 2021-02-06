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

	it('matches snapshot', () => {
		expect(utils.container).toMatchSnapshot();
	});
});
