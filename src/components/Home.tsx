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
	}, []);

	return (
		<div>
			<ContentHeader title="Home" />
			{covers.length ? <CoverList covers={covers} /> : null}
		</div>
	);
};

export default Home;
