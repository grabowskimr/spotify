import React from 'react';

const PlaceholderItem = (): JSX.Element => (
	<li className="list-placeholder-item">
		<span className="list-placeholder-text"></span>
		<span className="list-placeholder-text"></span>
		<span className="list-placeholder-text small"></span>
		<span className="list-placeholder-text small"></span>
	</li>
);

const ListPlaceholder = () => (
	<ul className="list-placeholder">
		<PlaceholderItem />
		<PlaceholderItem />
		<PlaceholderItem />
		<PlaceholderItem />
		<PlaceholderItem />
	</ul>
);

export default ListPlaceholder;
