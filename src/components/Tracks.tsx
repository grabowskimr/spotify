import React, { useEffect, useMemo } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { getTracks } from '../actions/apiCalls';
import ContentHeader from '../containers/ContentHeader';
import TracksList from '../containers/TracksList';
import ListPlaceholder from '../containers/ListPlaceholder';
import { clearTracks } from '../actions/actions';

type MatchParams = {
	id: string;
	type: string;
};

const Tracks: React.FC<RouteComponentProps<MatchParams>> = (props): JSX.Element => {
	const tracks = useSelector((state: ReduxState) => state.tracks);
	const dispatch = useDispatch();
	const data = useMemo(
		() => ({
			tracks: tracks
		}),
		[tracks]
	);

	useEffect(() => {
		dispatch(getTracks(props.match.params.id, props.match.params.type));

		return () => {
			dispatch(clearTracks());
		};
	}, [dispatch, props.match.params.id, props.match.params.type]);

	return (
		<>
			<ContentHeader title="Tracks" />
			{tracks && tracks.length ? <TracksList tracks={data.tracks} playlistId={props.match.params.id} /> : <ListPlaceholder />}
		</>
	);
};

export default Tracks;
