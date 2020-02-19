import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLink: React.FC<TSidebarLink> = (props): JSX.Element => {
	return (
		<Link to={props.link} className="sidebar-link">
			<span className="material-icons">{props.icon}</span>
			<span>{props.name}</span>
		</Link>
	);
};

export default SidebarLink;
