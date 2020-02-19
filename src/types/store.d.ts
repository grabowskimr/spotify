/// <reference types="react-scripts" />

type ReduxState = {
	showLoader: boolean;
	covers: any;
	categoryCovers: SpotifyCategory[];
};

type Action = {
	type: symbol;
	payload: Partial<ReduxState>;
};
