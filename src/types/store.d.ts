/// <reference types="react-scripts" />

type ReduxState = {
	showLoader: boolean;
	covers: any;
	categoryCovers: SpotifyCategory[];
	error: string;
	tracks: SpotifyStandardizedTrack[];
	playListTracks: SpotifyStandardizedTrack[];
	playedTrack: SpotifyStandardizedTrack;
	playedPlaylistId: string;
	play: boolean;
	prevAvailable: boolean;
	nextAvailable: boolean;
};

type Action = {
	type: symbol;
	payload: Partial<ReduxState>;
};
