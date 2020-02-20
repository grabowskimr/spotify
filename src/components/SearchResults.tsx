import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { clearPlaylists } from '../actions/actions';
import { search } from '../actions/apiCalls';
import ContentHeader from '../containers/ContentHeader';
import CoverList from '../containers/CoverList';

type MatchProps = {
	query: string;
};

const SearchResults: React.FC<RouteComponentProps<MatchProps>> = (props): JSX.Element => {
	const dispatch = useDispatch();
	const covers = useSelector((state: ReduxState) => state.covers);

	useEffect(() => {
		dispatch(search(props.match.params.query));
		return () => {
			dispatch(clearPlaylists());
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.match.params.query]);

	return (
		<div className="search-results">
			<ContentHeader title={`Search: ${props.match.params.query}`} />
			<CoverList covers={covers} />
		</div>
	);
};

export default SearchResults;
