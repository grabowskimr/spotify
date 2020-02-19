import React from 'react';

import SidebarLink from './SidebarLink';

type Props = {
	sidebarLinks: TSidebarLink[];
};

const Sidebar: React.FC<Props> = (props): JSX.Element => {
	return (
		<div className="sidebar">
			<ul className="sidebar-list">
				{props.sidebarLinks.map((link: TSidebarLink) => (
					<li key={link.name} className="sidebar-list-item">
						<SidebarLink {...link} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
