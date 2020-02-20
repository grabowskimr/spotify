import React from 'react';
import { useSelector } from 'react-redux';

import Player from '../components/Player';
import AudioPlayer from '../components/AudioPlayer';

const Bottom = (): JSX.Element => {
	const playedPlaylistId = useSelector((state: ReduxState) => state.playedPlaylistId);
	return (
		<div className="bottom">
			<Player type="full" trackListId={playedPlaylistId} />
			<AudioPlayer />
		</div>
	);
};

export default Bottom;
