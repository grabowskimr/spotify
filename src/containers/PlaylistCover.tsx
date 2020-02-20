import React from 'react';
import { Link } from 'react-router-dom';

import Player from '../components/Player';

type Props = {
	playlist: SpotifyPlaylistItem;
};

const PlaylistCover = (props: Props): JSX.Element => (
	<div className="record-cover">
		<div className="record-player-content">
			<img className="record-cover-image" src={props.playlist.images[0].url} alt="cover" />
			<Player type="simple" trackListId={props.playlist.id} trackListType="playlist" />
		</div>
		<h3 className="record-cover-name">
			<Link to={`/tracks/${props.playlist.type}/${props.playlist.id}`}>{props.playlist.name}</Link>
		</h3>
		<span className="record-cover-desc">{props.playlist.description}</span>
		<span className="record-cover-tracks">Tracks: {props.playlist.tracks.total}</span>
	</div>
);

export default PlaylistCover;
