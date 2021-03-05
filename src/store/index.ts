import { combineReducers } from 'redux';
import app, { appSaga } from './app';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
	app
});

export function* rootSaga() {
	yield all([appSaga()])
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
