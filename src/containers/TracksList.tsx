import React from 'react';

import Player from '../components/Player';

type Props = {
	tracks: SpotifyTrack[];
};

const TracksList: React.FC<Props> = ({ tracks }): JSX.Element => (
	<div className="tracks-list">
		<table className="tracks-list-table">
			<thead className="tracks-list-head">
				<tr>
					<th></th>
					<th>Title</th>
					<th>Artist</th>
					<th>Duration</th>
				</tr>
			</thead>
			<tbody className="tracks-list-body">
				{tracks.map(track => {
					const isPlaylist = !!track.track;
					const id = isPlaylist ? track.track.id : track.id;

					if (!id) return null;

					const artists = isPlaylist ? track.track.artists : track.artists;
					const trackName = isPlaylist ? track.track.name : track.name;
					const duration = isPlaylist ? track.track.duration_ms : track.duration_ms;
					const artistsNames = artists.length > 1 ? artists.map(artist => artist.name).join(', ') : artists[0].name;

					return (
						<tr key={id} className="track-record">
							<td>
								<Player type="play" />
							</td>
							<td className="track-name">{trackName}</td>
							<td className="track-duration">{artistsNames}</td>
							<td className="track-duration">{duration}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	</div>
);

export default TracksList;
