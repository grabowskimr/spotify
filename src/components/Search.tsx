import React from 'react';

const Search = (): JSX.Element => {
	return (
		<div className="search">
			<span className="material-icons">search</span>
			<input type="text" placeholder="Search" />
		</div>
	);
};

export default Search;
