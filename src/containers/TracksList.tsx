import React from 'react';

import Player from '../components/Player';
import { msToTime } from '../utils/msToTime';

type Props = {
	tracks: SpotifyStandardizedTrack[];
	playlistId: string;
};

const TracksList: React.FC<Props> = ({ tracks, playlistId }): JSX.Element => (
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
					if (!track.id) return null;

					const artistsNames = track.artists.length > 1 ? track.artists.map(artist => artist.name).join(', ') : track.artists[0].name;

					return (
						<tr key={track.id} className="track-record">
							<td>{track.preview_url ? <Player type="play" track={track} trackListId={playlistId} /> : null}</td>
							<td className="track-name">{track.name}</td>
							<td className="track-duration">{artistsNames}</td>
							<td className="track-duration">{msToTime(track.duration_ms)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	</div>
);

export default TracksList;
