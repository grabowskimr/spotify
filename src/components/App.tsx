import React from 'react';
import { createBrowserHistory } from 'history';

import { initApp } from '../actions/apiCalls';
import Layout from '../containers/Layout';
import Routing from './Routing';
import { Router } from 'react-router-dom';
import ListPlaceholder from '../containers/ListPlaceholder';

class App extends React.Component {
	state = {
		sideBarLinks: [
			{ link: '/', name: 'Home', icon: 'home' },
			{ link: '/categories', name: 'Categories', icon: 'library_music' },
			{ link: '/new', name: 'New Releases', icon: 'new_releases' }
		]
	};

	history = createBrowserHistory();

	componentDidMount(): void {
		initApp();
	}

	render(): React.ReactNode {
		return (
			<div className="app">
				<Router history={this.history}>
					<Layout history={this.history} sidebarLinks={this.state.sideBarLinks}>
						{window.localStorage.getItem('token') ? <Routing /> : <ListPlaceholder />}
					</Layout>
				</Router>
			</div>
		);
	}
}

export default App;
