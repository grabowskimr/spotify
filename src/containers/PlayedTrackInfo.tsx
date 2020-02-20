import React from 'react';
import { useSelector } from 'react-redux';

const PlayedTrackInfo = () => {
	const track = useSelector((state: ReduxState) => state.playedTrack);
	return (
		<div className="played-track">
			<h3 className="track-name">{track.name}</h3>
		</div>
	);
};

export default PlayedTrackInfo;
