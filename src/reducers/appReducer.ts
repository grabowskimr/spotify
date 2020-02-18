import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import ACTIONS from '../constants/actions';

export const initialState: ReduxState = {};

export const appReducer = (state = initialState, action: ReduxAction): ReduxState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default createStore(appReducer, applyMiddleware<ThunkMiddleware>(thunk));