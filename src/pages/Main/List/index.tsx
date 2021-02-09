import * as React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';
import Result from './Result';
import Vote from './Vote';

function List() {
	const match = useRouteMatch();

	return(
		<Switch>
			<Route exact path={`${match.url}`} component={Home} />
			<Route exact path={`${match.url}/edit/:id`} component={Edit} />
			<Route exact path={`${match.url}/result/:id`} component={Result} />
			<Route exact path={`${match.url}/vote/:id`} component={Vote} />
			<Redirect to={`${match.url}`} />
		</Switch>
	);
}

export default List;

