import React from 'react';
import { useSelector } from 'react-redux';

import Player from '../components/Player';
import AudioPlayer from '../components/AudioPlayer';
import PlayedTrackInfo from './PlayedTrackInfo';

const Bottom = (): JSX.Element => {
	const playedPlaylistId = useSelector((state: ReduxState) => state.playedPlaylistId);
	return (
		<div className="bottom">
			<PlayedTrackInfo />
			<div className="player-container">
				<Player type="full" trackListId={playedPlaylistId} />
			</div>
			<AudioPlayer />
		</div>
	);
};

export default Bottom;
