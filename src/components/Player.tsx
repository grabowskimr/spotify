import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PlayerControls from '../containers/PlayerControls';
import { setPlayingTrack, setPlayingTracksList, play, pause, setNextAailable, setPrevAvailable, setPlaylistId } from '../actions/actions';
import { getTracksList } from '../actions/apiCalls';
type Props = {
	type: 'simple' | 'full' | 'play';
	trackListId: string;
	trackListType?: string;
	track?: SpotifyStandardizedTrack;
};

const Player: React.FC<Props> = (props): JSX.Element => {
	const tracks = useSelector((state: ReduxState) => state.tracks);
	const playedTrack = useSelector((state: ReduxState) => state.playedTrack);
	const isPlaying = useSelector((state: ReduxState) => state.play);
	const nextAvailable = useSelector((state: ReduxState) => state.nextAvailable);
	const prevAvailable = useSelector((state: ReduxState) => state.prevAvailable);
	const playListTracks = useSelector((state: ReduxState) => state.playListTracks);
	const playedPlaylistId = useSelector((state: ReduxState) => state.playedPlaylistId);
	const dispatch = useDispatch();
	const [currentPlayed, setCurrentPlayed] = useState(false);

	useEffect(() => {
		if (props.track) {
			if (props.track.id === playedTrack.id) {
				if (!isPlaying) {
					setCurrentPlayed(false);
				} else {
					setCurrentPlayed(true);
				}
			} else {
				setCurrentPlayed(false);
			}
		}
	}, [playedTrack, props.track, isPlaying]);

	useEffect(() => {
		setNavigation(playedTrack);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [playedTrack, playListTracks, playedPlaylistId]);

	const filterPlayableTrack = (tracks: SpotifyStandardizedTrack[]): SpotifyStandardizedTrack[] => {
		return tracks.filter(track => !!track.preview_url);
	};

	const getTrackIndex = (track: SpotifyStandardizedTrack): number => playListTracks.findIndex(t => t.id === track.id);

	const setNavigation = (track: SpotifyStandardizedTrack): void => {
		const trackIndex = getTrackIndex(track);
		if (!playedTrack.id) {
			dispatch(setNextAailable(false));
			dispatch(setPrevAvailable(false));
			return;
		}
		if (trackIndex === playListTracks.length - 1) {
			dispatch(setNextAailable(false));
			dispatch(setPrevAvailable(true));
		} else if (trackIndex < playListTracks.length - 1 && trackIndex > 0) {
			dispatch(setNextAailable(true));
			dispatch(setPrevAvailable(true));
		} else if (trackIndex === 0) {
			dispatch(setNextAailable(true));
			dispatch(setPrevAvailable(false));
		}
	};

	const handlePlay = async (): Promise<void> => {
		if (props.track) {
			dispatch(setPlayingTrack(props.track));
			dispatch(setPlayingTracksList(filterPlayableTrack(tracks)));
			dispatch(setPlaylistId(props.trackListId));
			if (props.track.id === playedTrack.id) {
				if (!isPlaying) {
					dispatch(play());
				} else {
					dispatch(pause());
				}
			} else {
				if (!isPlaying) {
					dispatch(play());
				}
			}
		} else {
			if (props.trackListType && playedPlaylistId !== props.trackListId) {
				getTracksList(props.trackListId, props.trackListType).then(tracksList => {
					dispatch(setPlayingTrack(filterPlayableTrack(tracksList.items)[0]));
					dispatch(setPlayingTracksList(filterPlayableTrack(tracksList.items)));
					dispatch(setPlaylistId(props.trackListId));
					dispatch(play());
				});
			} else {
				if (!isPlaying) {
					dispatch(play());
				} else {
					dispatch(pause());
				}
			}
		}
	};

	const handlePrev = (): void => {
		const trackIndex = getTrackIndex(playedTrack);
		if (prevAvailable) {
			dispatch(setPlayingTrack(playListTracks[trackIndex - 1]));
		} else {
			dispatch(setPlayingTrack(playedTrack));
		}
	};

	const handleNext = (): void => {
		const trackIndex = getTrackIndex(playedTrack);
		if (nextAvailable) {
			dispatch(setPlayingTrack(playListTracks[trackIndex + 1]));
		} else {
			dispatch(setPlayingTrack(playListTracks[0]));
		}
	};

	return (
		<PlayerControls
			currentPlayed={currentPlayed}
			type={props.type}
			handlePlay={handlePlay}
			handlePrev={handlePrev}
			handleNext={handleNext}
			trackListId={props.trackListId}
		/>
	);
};

export default Player;
