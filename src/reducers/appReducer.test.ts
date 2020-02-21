import { appReducer, initialState } from './appReducer';
import ACTIONS from '../constants/actions';

import { playlist, tracks } from '../service/data';

describe('appReducer', () => {
	it('should return the initial state', () => {
		expect(
			appReducer(undefined, {
				type: Symbol('NONE'),
				payload: {}
			})
		).toEqual({
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
		});
	});

	it('should handle INSERT_PLAYLIST action', () => {
		expect(
			appReducer(initialState, {
				type: ACTIONS.INSERT_PLAYLIST,
				payload: {
					covers: playlist
				}
			})
		).toEqual({
			...initialState,
			covers: playlist
		});
	});

	it('should handle CLEAR_PLAYLISTS action', () => {
		expect(
			appReducer(initialState, {
				type: ACTIONS.CLEAR_PLAYLISTS,
				payload: {
					covers: []
				}
			})
		).toEqual({
			...initialState,
			covers: []
		});
	});

	it('should handle PLAY action', () => {
		expect(
			appReducer(initialState, {
				type: ACTIONS.PLAY,
				payload: {
					play: true
				}
			})
		).toEqual({
			...initialState,
			play: true
		});
	});
});
