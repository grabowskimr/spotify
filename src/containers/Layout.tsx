import React from 'react';

import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Bottom from './Bottom';

type Props = {
	sidebarLinks: TSidebarLink[];
	history: any;
};

const Layout: React.FC<Props> = (props): JSX.Element => {
	return (
		<div className="app-container">
			<Sidebar sidebarLinks={props.sidebarLinks} />
			<div className="right-side">
				<Topbar {...props} />
				<main className="main">{props.children}</main>
			</div>
			<Bottom />
		</div>
	);
};

export default Layout;
