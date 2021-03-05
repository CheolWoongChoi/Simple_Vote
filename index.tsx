import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import Thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { CssBaseline } from '@material-ui/core';
import rootReducer, { rootSaga } from '@src/store';
import App from '@src/App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer, 
	composeWithDevTools(
		applyMiddleware(
			Thunk,
			sagaMiddleware,
			logger
		)
	)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<CssBaseline />
		<App />
	</Provider>,
	document.querySelector('#root')
);