import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPlayingTrack } from '../actions/actions';

const AudioPlayer = (): JSX.Element => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const track = useSelector((state: ReduxState) => state.playedTrack);
	const playlist = useSelector((state: ReduxState) => state.playListTracks);
	const play = useSelector((state: ReduxState) => state.play);
	const dispatch = useDispatch();

	useEffect(() => {
		if (play) {
			audioRef.current?.play();
		} else {
			audioRef.current?.pause();
		}
	}, [play, track.preview_url]);

	const goNext = () => {
		const trackIndex = playlist.findIndex(t => t.id === track.id);
		if (trackIndex <= playlist.length) {
			dispatch(setPlayingTrack(playlist[trackIndex + 1]));
		} else {
		}
	};

	const handleEnd = () => {
		goNext();
	};

	return <>{track.preview_url ? <audio src={track.preview_url} onEnded={handleEnd} ref={audioRef}></audio> : null}</>;
};

export default AudioPlayer;
