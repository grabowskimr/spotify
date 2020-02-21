export const standarizeTracks = (tracks: SpotifyTrack[]): SpotifyStandardizedTrack[] => {
	return tracks.map(track => {
		const isPlaylist = !!track.track;
		return isPlaylist ? track.track : track;
	});
};
