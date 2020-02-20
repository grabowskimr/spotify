import axios from 'axios';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import SPOTIFY from '../constants/spotify';
import { endpoint } from '../constants/config';
import { insertPlaylists, insertCategories, showError, saveTracks } from './actions';
import { standarizeTracks } from '../utils/standarizeTracks';

type TResult<R> = ThunkAction<R, ReduxState, undefined, Action>;
type TDispatch = ThunkDispatch<ReduxState, undefined, Action>;

const getData = (url: string): Promise<any> | null => {
	const token: string | null = localStorage.getItem('token');
	if (token) {
		return axios.get(`${endpoint}${url}`);
	}
	return null;
};

const dispatchError = (dispatch: TDispatch, message: string) => {
	if (message === 'Request failed with status code 401') {
		localStorage.removeItem('token');
		initApp();
	}
	dispatch(showError(message));
};

export const initApp = function() {
	let token: string | null = localStorage.getItem('token');

	if (!token) {
		let match = window.location.hash.match(/#access_token=(.*?)&/);
		let newToken = match && match[1];
		if (newToken) {
			localStorage.setItem('token', newToken);
			window.location.href = window.location.href.split('#')[0];
		} else {
			window.location.replace(
				`https://accounts.spotify.com/authorize?client_id=${SPOTIFY.CLINET_ID}&response_type=token&redirect_uri=${SPOTIFY.REDIRECT_URI}`
			);
		}
	}

	axios.defaults.headers.common.Authorization = 'Bearer ' + token;
	return token;
};

// export const getProfile = async () => {
// 	const data = await getData(`/me`);
// };

export const getTracksList = async (id: string, type: string | undefined): Promise<SpotifyStandardizedTracks> => {
	console.log('asda');
	const { data }: SpotifyResponse<SpotifyTracks> = await getData(`/${type}s/${id}/tracks`);
	const tracks: SpotifyStandardizedTracks = { ...data, items: standarizeTracks(data.items) };
	return tracks;
};

export const getFeaturedPlaylist = (): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	try {
		const { data }: SpotifyResponse<SporifyPlaylists> = await getData(`/browse/featured-playlists`);
		dispatch(insertPlaylists(data.playlists.items));
	} catch (e) {
		dispatchError(dispatch, e.message);
	}
};

export const getTracks = (id: string, type: string | undefined): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	try {
		const data: SpotifyStandardizedTracks = await getTracksList(id, type);
		dispatch(saveTracks(data.items));
	} catch (e) {
		dispatch(showError(e.message));
	}
};

export const getListOfCategories = (): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	try {
		const { data }: SpotifyResponse<SpotifyCategories> = await getData(`/browse/categories`);
		dispatch(insertCategories(data.categories.items));
	} catch (e) {
		dispatch(showError(e.message));
	}
};

export const getCategoryPlaylists = (id: string): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	try {
		const { data }: SpotifyResponse<SporifyPlaylists> = await getData(`/browse/categories/${id}/playlists`);
		dispatch(insertPlaylists(data.playlists.items));
	} catch (e) {
		dispatch(showError(e.message));
	}
};

export const getNewReleases = (): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	try {
		const { data }: SpotifyResponse<SporifyAlbumsList> = await getData(`/browse/new-releases`);
		dispatch(insertPlaylists(data.albums.items));
	} catch (e) {
		dispatch(showError(e.message));
	}
};
