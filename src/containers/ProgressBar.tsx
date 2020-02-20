import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProgressBar = () => {
	const playedTrack = useSelector((state: ReduxState) => state.playedTrack);
	const isPlaying = useSelector((state: ReduxState) => state.play);
	const [progress, setProgress] = useState(0);
	const max = 30;

	const timerToClearSomewhere: any = useRef();

	useEffect(() => {
		setProgress(0);
		clearInterval(timerToClearSomewhere.current);
	}, [playedTrack]);

	useEffect(() => {
		if (isPlaying) {
			if (progress < max) {
				timerToClearSomewhere.current = setInterval(() => {
					setProgress(progress + 1);
				}, 1000);
			}
		}

		return () => {
			clearInterval(timerToClearSomewhere.current);
		};
	}, [progress, isPlaying, playedTrack]);

	return (
		<div className="player-info">
			<span className="time played-time">00:{progress}</span>
			<span className="progress-bar">
				<span className="progress" style={{ width: `${progress * 3.33}%` }}></span>
			</span>
			<span className="time song-time">00:30</span>
		</div>
	);
};

export default ProgressBar;
