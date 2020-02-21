import React from 'react';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { appReducer, initialState } from '../reducers/appReducer';
import { Provider } from 'react-redux';

function renderWithRedux(ui: any, { state = initialState, store = createStore(appReducer, applyMiddleware<ThunkMiddleware>(thunk)) } = {}) {
	return {
		...render(<Provider store={store}>{ui}</Provider>),
		store
	};
}

export default renderWithRedux;
