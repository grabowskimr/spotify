import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from '../testHelpers/renderWithredux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import AlbumCover from './AlbumCover';
import { album } from '../service/data';

describe('<AlbumCover />', () => {
	const history = createMemoryHistory();

	it('should render image', () => {
		const { getByTestId } = renderWithRedux(
			<Router history={history}>
				<AlbumCover album={album} />
			</Router>
		);

		expect(getByTestId('cover-img')).toBeDefined();
		expect(getByTestId('cover-img').getAttribute('src')).toBe('url');
	});

	it('should render player', () => {
		const { container } = renderWithRedux(
			<Router history={history}>
				<AlbumCover album={album} />
			</Router>
		);

		expect(container.querySelector('.player-content')).toBeDefined();
	});

	it('should render album name', () => {
		const { getByText } = renderWithRedux(
			<Router history={history}>
				<AlbumCover album={album} />
			</Router>
		);

		expect(getByText(album.name)).toBeDefined();
	});

	it('should render album release date', () => {
		const { getByText } = renderWithRedux(
			<Router history={history}>
				<AlbumCover album={album} />
			</Router>
		);

		expect(getByText(album.release_date)).toBeDefined();
	});

	it('should render album tracks count', () => {
		const { getByTestId } = renderWithRedux(
			<Router history={history}>
				<AlbumCover album={album} />
			</Router>
		);

		expect(getByTestId('cover-tracks')).toBeDefined();
		expect(getByTestId('cover-tracks').textContent).toBe('Tracks: ' + album.total_tracks);
	});
});
