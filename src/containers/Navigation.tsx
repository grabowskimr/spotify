import React from 'react';

const Navigation = () => {
	return (
		<div className="navigation">
			<button className="navi-prev">
				<span className="material-icons">chevron_left</span>
			</button>
			<button className="navi-next inactive">
				<span className="material-icons">chevron_right</span>
			</button>
		</div>
	);
};

export default Navigation;
