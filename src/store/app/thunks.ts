import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { login } from './actions';

export function loginThunk(id: string): ThunkAction<void, RootState, null, ReturnType<typeof login>> {
	return async (dispatch: any) => {
		sessionStorage.setItem('authUser', JSON.stringify({ id }));
		dispatch(login(id));
	}
} 