import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { getCategoryPlaylists } from '../actions/apiCalls';
import { clearPlaylists } from '../actions/actions';
import ContentHeader from '../containers/ContentHeader';
import CoverList from '../containers/CoverList';

type MatchParams = {
	id: string;
};

const Category: React.FC<RouteComponentProps<MatchParams>> = (props): JSX.Element => {
	const dispatch = useDispatch();
	const covers = useSelector((state: ReduxState) => state.covers);

	useEffect(() => {
		dispatch(getCategoryPlaylists(props.match.params.id));
		return () => {
			dispatch(clearPlaylists());
		};
	}, [dispatch, props.match.params.id]);

	return (
		<div>
			<ContentHeader title="Category" />
			<CoverList covers={covers} />
		</div>
	);
};

export default Category;
