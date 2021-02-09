import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Login from 'pages/Login';
import Main from 'pages/Main';
import './App.scss';

function App() {
	const { user } = useSelector((state: RootState) => state.app);  
	
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					{user?.id ? <Redirect to='/main' /> : <Redirect to='/login' />}
				</Route>
				<Route path='/login' component={Login} /> 
				<Route path='/main' component={Main} />
				<Redirect path='*' to='/' />
			</Switch>
		</BrowserRouter>
	);
}

export default App;