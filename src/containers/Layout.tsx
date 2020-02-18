import React, { ReactElement } from 'react';

import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Bottom from './Bottom';

const Layout: React.FC = (props): ReactElement => {
	return (
		<div className="app-container">
			<Sidebar />
			<div className="right-side">
				<Topbar />
				<main className="main">{props.children}</main>
			</div>
			<Bottom />
		</div>
	);
};

export default Layout;
