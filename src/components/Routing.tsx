import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Categories from './Categories';
import NewReleases from './NewReleases';
import Tracks from './Tracks';
import Category from './Category';

const Routing: React.FC = (): JSX.Element => {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/categories" component={Categories} />
				<Route exact path="/category/:id" component={Category} />
				<Route exact path="/new" component={NewReleases} />
				<Route exact path="/tracks/:type/:id" component={Tracks} />
			</Switch>
		</>
	);
};

export default Routing;
