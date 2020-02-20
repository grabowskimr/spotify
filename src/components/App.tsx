import React from 'react';

import { initApp } from '../actions/apiCalls';
import Layout from '../containers/Layout';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';

import ListPlaceholder from '../containers/ListPlaceholder';

class App extends React.Component {
	state = {
		sideBarLinks: [
			{ link: '/', name: 'Home', icon: 'home' },
			{ link: '/categories', name: 'Categories', icon: 'library_music' },
			{ link: '/new', name: 'New Releases', icon: 'new_releases' }
		]
	};

	componentDidMount(): void {
		initApp();
	}

	render(): React.ReactNode {
		return (
			<div className="app">
				<BrowserRouter>
					<Layout sidebarLinks={this.state.sideBarLinks}>{window.localStorage.getItem('token') ? <Routing /> : <ListPlaceholder />}</Layout>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
