import React from 'react';

import Search from '../components/Search';
import Navigation from './Navigation';

const Topbar: React.FC = (): JSX.Element => {
	return (
		<div className="topbar">
			<Navigation />
			<Search />
		</div>
	);
};

export default Topbar;
