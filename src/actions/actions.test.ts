import * as actions from './actions';
import ACTIONS from '../constants/actions';
import { categories, playlist } from '../service/data';

describe('redux actions', () => {
	it('should insert playlist', () => {
		const expectedAction = {
			type: ACTIONS.INSERT_PLAYLIST,
			payload: {
				covers: playlist
			}
		};

		expect(actions.insertPlaylists(playlist)).toEqual(expectedAction);
	});

	it('should hide loader', () => {
		const expectedAction = {
			type: ACTIONS.HIDE_LOADER,
			payload: {
				showLoader: false
			}
		};

		expect(actions.hideLoader()).toEqual(expectedAction);
	});

	it('should insert categories', () => {
		const expectedAction = {
			type: ACTIONS.INSERT_CATEGORIES,
			payload: {
				categoryCovers: categories
			}
		};

		expect(actions.insertCategories(categories)).toEqual(expectedAction);
	});
});
