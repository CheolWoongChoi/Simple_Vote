import { call, put, takeEvery } from 'redux-saga/effects';
import { fakeLogin } from '@apis/app';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, login } from './actions';

function* loginSaga(action: ReturnType<typeof login>) {
	try {
		const id = yield call(fakeLogin, action.payload)
		
		yield put({
			type: LOGIN_SUCCESS,
			payload: id
		})
	} catch(e) {
		yield put({
			type: LOGIN_FAILURE,
			errorDesc: e,
		})
	}
}

export function* appSaga() {
	yield takeEvery(LOGIN, loginSaga);
}