import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { getNewReleases } from '../actions/apiCalls';
import { clearPlaylists } from '../actions/actions';
import ContentHeader from '../containers/ContentHeader';
import CoverList from '../containers/CoverList';

type MatchParams = {
	id: string;
};

const NewReleases: React.FC<RouteComponentProps<MatchParams>> = (props): JSX.Element => {
	const dispatch = useDispatch();
	const covers = useSelector((state: ReduxState) => state.covers);

	useEffect(() => {
		dispatch(getNewReleases());
		return () => {
			dispatch(clearPlaylists());
		};
	}, []);

	return (
		<div>
			<ContentHeader title="New Releases" />
			<CoverList covers={covers} />
		</div>
	);
};

export default NewReleases;
