import React, { useEffect, useState, ChangeEvent } from 'react';

type Props = {
	history: any;
};

const Search: React.FC<Props> = (props): JSX.Element => {
	const [searchInput, setSearchInput] = useState<string>('');
	const [searchTimeout, setSearchTimeout] = useState();
	const minValueLength = 3;

	const handeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
		setSearchInput(e.target.value);
		clearTimeout(searchTimeout);
	};

	useEffect(() => {
		if (searchInput.length < minValueLength) {
			return;
		} else {
			setSearchTimeout(
				setTimeout(() => {
					props.history.push(`/search/${searchInput}`);
				}, 1000)
			);
		}

		return () => {
			clearTimeout(searchTimeout);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchInput]);

	return (
		<div className="search">
			<span className="material-icons">search</span>
			<input type="text" placeholder="Search" onChange={handeSearch} />
		</div>
	);
};

export default Search;
