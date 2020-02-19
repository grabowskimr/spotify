import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import ACTIONS from '../constants/actions';

export const initialState: ReduxState = {
	showLoader: false,
	covers: [],
	categoryCovers: []
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
		default:
			return state;
	}
};

export default createStore(appReducer, applyMiddleware<ThunkMiddleware>(thunk));
