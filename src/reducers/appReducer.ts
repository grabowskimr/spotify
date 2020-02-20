import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import ACTIONS from '../constants/actions';

export const initialState: ReduxState = {
	showLoader: false,
	covers: [],
	categoryCovers: [],
	error: '',
	tracks: [],
	playedTrack: {
		artists: [],
		duration_ms: 0,
		id: '',
		name: '',
		preview_url: ''
	},
	playListTracks: [],
	playedPlaylistId: '',
	play: false,
	prevAvailable: false,
	nextAvailable: false
};

export const appReducer = (state = initialState, action: Action): ReduxState => {
	switch (action.type) {
		case ACTIONS.INSERT_PLAYLIST:
			return {
				...state,
				covers: action.payload.covers ? action.payload.covers : []
			};
		case ACTIONS.INSERT_CATEGORIES:
			return {
				...state,
				categoryCovers: action.payload.categoryCovers ? action.payload.categoryCovers : []
			};
		case ACTIONS.CLEAR_PLAYLISTS:
			return {
				...state,
				covers: []
			};
		case ACTIONS.SHOW_ERROR:
			return {
				...state,
				error: action.payload.error ? action.payload.error : ''
			};
		case ACTIONS.SAVE_TRACKS:
			return {
				...state,
				tracks: action.payload.tracks ? action.payload.tracks : []
			};
		case ACTIONS.CLEAR_TRACKS:
			return {
				...state,
				tracks: []
			};
		case ACTIONS.SET_PLAYING_TRACK:
			return {
				...state,
				playedTrack: action.payload.playedTrack
					? { ...action.payload.playedTrack }
					: {
							artists: [],
							duration_ms: 0,
							id: '',
							name: '',
							preview_url: ''
					  }
			};
		case ACTIONS.SET_PLAYLIST_ID:
			return {
				...state,
				playedPlaylistId: action.payload.playedPlaylistId ? action.payload.playedPlaylistId : ''
			};
		case ACTIONS.SET_PLAYING_TRACKS_LIST:
			return {
				...state,
				playListTracks: action.payload.playListTracks ? action.payload.playListTracks : []
			};
		case ACTIONS.PLAY:
			return {
				...state,
				play: true
			};
		case ACTIONS.PAUSE:
			return {
				...state,
				play: false
			};
		case ACTIONS.SET_NEXT_AVAILABLE: {
			return {
				...state,
				nextAvailable: action.payload.nextAvailable !== undefined ? action.payload.nextAvailable : false
			};
		}
		case ACTIONS.SET_PREV_AVAILABLE: {
			return {
				...state,
				prevAvailable: action.payload.prevAvailable !== undefined ? action.payload.prevAvailable : false
			};
		}
		default:
			return state;
	}
};

export default createStore(appReducer, applyMiddleware<ThunkMiddleware>(thunk));
