import React from 'react';

import Search from '../components/Search';
import Navigation from './Navigation';

type Props = {
	history: any;
};

const Topbar: React.FC<Props> = (props): JSX.Element => {
	return (
		<div className="topbar">
			<Navigation />
			<Search {...props} />
		</div>
	);
};

export default Topbar;
