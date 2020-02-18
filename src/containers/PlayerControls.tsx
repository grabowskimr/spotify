import React, { ReactElement } from 'react';

const PlayerControls = (): ReactElement => {
	return (
		<div className="player-content">
			<div className="player-controls">
				<button className="player-control prev">
					<span className="material-icons">skip_previous</span>
				</button>
				<button className="player-control play">
					<span className="material-icons">play_arrow</span>
				</button>
				<button className="player-control next">
					<span className="material-icons">skip_next</span>
				</button>
			</div>
			<div className="player-info">
				<span className="time played-time">0:12</span>
				<span className="progress-bar">
					<span className="progress"></span>
				</span>
				<span className="time song-time">2:20</span>
			</div>
		</div>
	);
};

export default PlayerControls;
