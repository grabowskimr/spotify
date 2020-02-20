import ACTIONS from '../constants/actions';

export const insertPlaylists = (items: any): Action => {
	return {
		type: ACTIONS.INSERT_PLAYLIST,
		payload: {
			covers: items
		}
	};
};

export const showLoader = (): Action => {
	return {
		type: ACTIONS.SHOW_LOADER,
		payload: {
			showLoader: true
		}
	};
};

export const hideLoader = (): Action => {
	return {
		type: ACTIONS.HIDE_LOADER,
		payload: {
			showLoader: false
		}
	};
};

export const insertCategories = (items: SpotifyCategory[]): Action => {
	return {
		type: ACTIONS.INSERT_CATEGORIES,
		payload: {
			categoryCovers: items
		}
	};
};

export const clearPlaylists = (): Action => {
	return {
		type: ACTIONS.CLEAR_PLAYLISTS,
		payload: {}
	};
};

export const showError = (error: string): Action => {
	return {
		type: ACTIONS.SHOW_ERROR,
		payload: {
			error: error
		}
	};
};

export const saveTracks = (tracks: SpotifyStandardizedTrack[]): Action => {
	return {
		type: ACTIONS.SAVE_TRACKS,
		payload: {
			tracks: tracks
		}
	};
};

export const clearTracks = (): Action => {
	return {
		type: ACTIONS.CLEAR_TRACKS,
		payload: {}
	};
};

export const setPlayingTrack = (track: SpotifyStandardizedTrack): Action => {
	return {
		type: ACTIONS.SET_PLAYING_TRACK,
		payload: {
			playedTrack: track
		}
	};
};

export const setPlayingTracksList = (tracks: SpotifyStandardizedTrack[]): Action => {
	return {
		type: ACTIONS.SET_PLAYING_TRACKS_LIST,
		payload: {
			playListTracks: tracks
		}
	};
};

export const setPlaylistId = (id: string): Action => {
	return {
		type: ACTIONS.SET_PLAYLIST_ID,
		payload: {
			playedPlaylistId: id
		}
	};
};

export const play = (): Action => {
	return {
		type: ACTIONS.PLAY,
		payload: {}
	};
};

export const pause = (): Action => {
	return {
		type: ACTIONS.PAUSE,
		payload: {}
	};
};

export const setPrevAvailable = (status: boolean): Action => {
	return {
		type: ACTIONS.SET_PREV_AVAILABLE,
		payload: {
			prevAvailable: status
		}
	};
};

export const setNextAailable = (status: boolean): Action => {
	return {
		type: ACTIONS.SET_NEXT_AVAILABLE,
		payload: {
			nextAvailable: status
		}
	};
};
