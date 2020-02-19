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
