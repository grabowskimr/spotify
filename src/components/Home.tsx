import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFeaturedPlaylist } from '../actions/apiCalls';
import { clearPlaylists } from '../actions/actions';
import ContentHeader from '../containers/ContentHeader';
import CoverList from '../containers/CoverList';

const Home: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const covers = useSelector((state: ReduxState) => state.covers);

	useEffect(() => {
		dispatch(getFeaturedPlaylist());
		return () => {
			dispatch(clearPlaylists());
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<ContentHeader title="Home" />
			<CoverList covers={covers} />
		</div>
	);
};

export default Home;
