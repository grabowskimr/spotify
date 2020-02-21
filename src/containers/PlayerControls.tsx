import React from 'react';
import { useSelector } from 'react-redux';

import ProgressBar from './ProgressBar';

type Props = {
	type?: 'simple' | 'full' | 'play';
	handlePlay: () => void;
	handlePrev: () => void;
	handleNext: () => void;
	trackListId: string;
	currentPlayed: boolean;
};

const PlayerControls = (props: Props): JSX.Element => {
	const playedTrack = useSelector((state: ReduxState) => state.playedTrack);
	const nextAvailable = useSelector((state: ReduxState) => state.nextAvailable);
	const prevAvailable = useSelector((state: ReduxState) => state.prevAvailable);
	const playedPlaylistId = useSelector((state: ReduxState) => state.playedPlaylistId);
	const isPlaying = useSelector((state: ReduxState) => state.play);
	const correctPlaylist = playedPlaylistId === props.trackListId;
	return (
		<div data-testid="player" className={`player-content ${correctPlaylist ? 'played-cover' : null}`}>
			<div className={`player-controls ${isPlaying && props.currentPlayed ? 'visible' : null}`}>
				{props.type !== 'play' ? (
					<button
						data-test-id="prev"
						className={`player-control prev ${prevAvailable && correctPlaylist ? 'available' : null}`}
						onClick={props.handlePrev}
					>
						<span className="material-icons">skip_previous</span>
					</button>
				) : null}
				<button
					data-testid="play"
					className={`player-control play ${props.type === 'full' && !playedTrack.id ? 'disabled' : null}`}
					onClick={props.handlePlay}
				>
					{(isPlaying && correctPlaylist && props.type === 'simple') ||
					(isPlaying && props.currentPlayed && props.type !== 'simple') ||
					(isPlaying && props.type === 'full') ? (
						<span className="material-icons">pause</span>
					) : (
						<span className="material-icons">play_arrow</span>
					)}
				</button>
				{props.type !== 'play' ? (
					<button
						data-test-id="next"
						className={`player-control next ${nextAvailable && correctPlaylist ? 'available' : null}`}
						onClick={props.handleNext}
					>
						<span className="material-icons">skip_next</span>
					</button>
				) : null}
			</div>
			{props.type === 'full' ? <ProgressBar /> : null}
		</div>
	);
};

export default PlayerControls;
