import axios from 'axios';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import SPOTIFY from '../constants/spotify';
import { endpoint } from '../constants/config';
import { insertPlaylists, insertCategories } from './actions';

type TResult<R> = ThunkAction<R, ReduxState, undefined, Action>;
type TDispatch = ThunkDispatch<ReduxState, undefined, Action>;

const getData = (url: string): Promise<any> | null => {
	const token: string | null = localStorage.getItem('token');
	if (token) {
		return axios.get(`${endpoint}${url}`);
	}
	return null;
};

export const initApp = function() {
	let token: string | null = localStorage.getItem('token');

	if (!token) {
		let match = window.location.hash.match(/#access_token=(.*?)&/);
		let newToken = match && match[1];
		if (newToken) {
			localStorage.setItem('token', newToken);
		} else {
			window.location.replace(
				`https://accounts.spotify.com/authorize?client_id=${SPOTIFY.CLINET_ID}&response_type=token&redirect_uri=${SPOTIFY.REDIRECT_URI}`
			);
		}
	}

	axios.defaults.headers.common.Authorization = 'Bearer ' + token;
	window.location.hash = '';
	return token;
};

// export const getProfile = async () => {
// 	const data = await getData(`/me`);
// };

export const getFeaturedPlaylist = (): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	const { data }: SpotifyResponse<SporifyPlaylists> = await getData(`/browse/featured-playlists`);
	dispatch(insertPlaylists(data.playlists.items));
};

export const getTracks = async (id: string, type: string): Promise<SpotifyTracks> => {
	const { data }: SpotifyResponse<SpotifyTracks> = await getData(`/${type}s/${id}/tracks`);
	return data;
};

export const getListOfCategories = (): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	const { data }: SpotifyResponse<SpotifyCategories> = await getData(`/browse/categories`);
	dispatch(insertCategories(data.categories.items));
};

export const getCategoryPlaylists = (id: string): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	const { data }: SpotifyResponse<SporifyPlaylists> = await getData(`/browse/categories/${id}/playlists`);
	dispatch(insertPlaylists(data.playlists.items));
};

export const getNewReleases = (): TResult<Promise<void>> => async (dispatch: TDispatch) => {
	const { data }: SpotifyResponse<SporifyAlbumsList> = await getData(`/browse/new-releases`);
	dispatch(insertPlaylists(data.albums.items));
};
