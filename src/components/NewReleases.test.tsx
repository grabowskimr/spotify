import React from 'react';
import configureMockStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import NewReleases from './NewReleases';
import { routerTestProps } from '../testHelpers/testHelpers';
import thunk from 'redux-thunk';
import * as actions from '../actions/apiCalls';

const mockStore = configureMockStore([thunk]);

describe('<NewReleases />', () => {
	const store = mockStore({
		covers: []
	});
	const { history, location, match } = routerTestProps('/', { id: '123' });

	it('should display page title', () => {
		const { getByText } = render(
			<Provider store={store}>
				<Router history={history}>
					<NewReleases history={history} location={location} match={match} />
				</Router>
			</Provider>
		);

		expect(getByText(/New Releases/i)).toBeDefined();
	});

	it('should start fetch the data', () => {
		const spy = jest.spyOn(actions, 'getNewReleases');
		render(
			<Provider store={store}>
				<Router history={history}>
					<NewReleases history={history} location={location} match={match} />
				</Router>
			</Provider>
		);

		expect(spy).toHaveBeenCalled();
	});
});
