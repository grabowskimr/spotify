import React from 'react';
import { Link } from 'react-router-dom';

import Player from '../components/Player';

type Props = {
	album: SpotifyAlbum;
};

const AlbumCover = (props: Props): JSX.Element => (
	<div className="record-cover">
		<div className="record-player-content">
			<img className="record-cover-image" src={props.album.images[0].url} alt="cover" />
			<Player type="simple" trackListId={props.album.id} trackListType="album" />
		</div>
		<h3 className="record-cover-name">
			<Link to={`/tracks/${props.album.type}/${props.album.id}`}>{props.album.name}</Link>
		</h3>
		<span className="record-cover-desc">{props.album.release_date}</span>
		<span className="record-cover-tracks">Tracks: {props.album.total_tracks}</span>
	</div>
);

export default AlbumCover;
