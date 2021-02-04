import * as React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from 'pages/Login';
import Main from 'pages/Main';
import classNames from 'classnames';
import styles from './App.scss';

const cx = classNames.bind(styles);

function App() {
	const [isLogin, setLogin] = useState(false);

	useEffect(() => {
		console.log('setLogin');
		setLogin(true);
	}, []);

	return (
		<BrowserRouter>
			<Switch>
				{false ? (
					<Route exact to='/' component={Main} />
					) : (
					<Route exact to='/' component={Login} /> 
				)}
				<Redirect path='*' to='/' />
			</Switch>
		</BrowserRouter>
	);
}

export default App;