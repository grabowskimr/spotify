import React from 'react';

const Sidebar: React.FC = (): JSX.Element => {
	return (
		<div className="sidebar">
			<ul className="sidebar-list">
				<li className="sidebar-list-item">
					<a href="/" className="sidebar-link">
						<span className="material-icons">library_music</span>
						<span>Categories</span>
					</a>
				</li>
				<li className="sidebar-list-item">
					<a href="/" className="sidebar-link">
						<span className="material-icons">new_releases</span>
						<span>New Releases</span>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
