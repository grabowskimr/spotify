import React from 'react';

type Props = {
	type?: 'simple' | 'full' | 'play';
};

const PlayerControls = (props: Props): JSX.Element => {
	return (
		<div className="player-content">
			<div className="player-controls">
				{props.type !== 'play' ? (
					<button className="player-control prev">
						<span className="material-icons">skip_previous</span>
					</button>
				) : null}
				<button className="player-control play">
					<span className="material-icons">play_arrow</span>
				</button>
				{props.type !== 'play' ? (
					<button className="player-control next">
						<span className="material-icons">skip_next</span>
					</button>
				) : null}
			</div>
			{props.type === 'full' ? (
				<div className="player-info">
					<span className="time played-time">0:12</span>
					<span className="progress-bar">
						<span className="progress"></span>
					</span>
					<span className="time song-time">2:20</span>
				</div>
			) : null}
		</div>
	);
};

export default PlayerControls;
