import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './Home';
import Categories from './Categories';
import NewReleases from './NewReleases';
import Tracks from './Tracks';
import Category from './Category';
import ErrorMessage from '../containers/ErrorMessage';
import SearchResults from './SearchResults';

const Routing: React.FC = (): JSX.Element => {
	const error = useSelector((state: ReduxState) => state.error);
	return (
		<>
			{error.length ? (
				<ErrorMessage error={error} />
			) : (
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/categories" component={Categories} />
					<Route exact path="/category/:id" component={Category} />
					<Route exact path="/new" component={NewReleases} />
					<Route exact path="/tracks/:type/:id" component={Tracks} />
					<Route exact path="/search/:query" component={SearchResults} />
				</Switch>
			)}
		</>
	);
};

export default Routing;
