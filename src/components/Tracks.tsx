import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

import { getTracks } from '../actions/apiCalls';
import ContentHeader from '../containers/ContentHeader';
import TracksList from '../containers/TracksList';

type MatchParams = {
	id: string;
	type: string;
};

const Tracks: React.FC<RouteComponentProps<MatchParams>> = (props): JSX.Element => {
	const [tracks, setTracks] = useState<SpotifyTrack[]>();
	useEffect(() => {
		const fetchData = async () => {
			const data = await getTracks(props.match.params.id, props.match.params.type);
			setTracks(data.items);
		};

		fetchData();
	}, [props.match.params.id, props.match.params.type]);
	return (
		<>
			<ContentHeader title="Tracks" />
			{tracks && tracks.length ? <TracksList tracks={tracks} /> : null}
		</>
	);
};

export default Tracks;
