import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

import * as actions from './actions';
import { getFeaturedPlaylist } from './apiCalls';
import { playlistsData } from '../service/data';

const mockSuccess = (data: object) => ({ status: 200, response: data });
const mockError = (error: string) => ({ status: 500, response: error });

const initialState = {
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

const mockStore = configureMockStore([thunk]);
const makeMockStore = (state = {}) => {
	return mockStore({
		...initialState,
		...state
	});
};

describe('getFeaturedPlaylist', () => {
	beforeEach(() => moxios.install());
	afterEach(() => moxios.uninstall());
	window.localStorage.setItem('token', 'test');

	it('dispatches insertPlaylists on success', () => {
		const store = makeMockStore();
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith(mockSuccess(playlistsData));
		});
		const expected = [actions.insertPlaylists(playlistsData.playlists.items)];
		return store.dispatch<any>(getFeaturedPlaylist()).then(() => {
			const actual = store.getActions();
			expect(actual).toEqual(expected);
		});
	});

	it('dispatches showError on failure', () => {
		const response = 'Request failed with status code 500';
		const store = makeMockStore();
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith(mockError(response));
		});
		const expected = [actions.showError(response)];
		return store.dispatch<any>(getFeaturedPlaylist()).then(() => {
			const actual = store.getActions();
			expect(actual).toEqual(expected);
		});
	});
});
