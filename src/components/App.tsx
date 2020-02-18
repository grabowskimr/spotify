import React from 'react';

import { initApp, getAlbums } from '../actions/apiCalls';
import Layout from '../containers/Layout';

class App extends React.Component {
	componentDidMount(): void {
		initApp();
		getAlbums();
	}

	render(): React.ReactNode {
		return (
			<div className="app">
				<Layout>main</Layout>
			</div>
		);
	}
}

export default App;
