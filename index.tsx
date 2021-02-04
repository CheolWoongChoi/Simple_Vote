import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { CssBaseline } from '@material-ui/core';
import rootReducer from 'src/store';
import App from './src/App';

const store = createStore(
	rootReducer, 
	composeWithDevTools(
		applyMiddleware(Thunk)
	)
);

ReactDOM.render(
	<Provider store={store}>
		<CssBaseline />
		<App />
	</Provider>,
	document.querySelector('#root')
);