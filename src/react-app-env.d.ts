/// <reference types="react-scripts" />

type TSidebarLink = {
	link: string;
	name: string;
	icon: string;
};

type SpotifyStandardizedTrack = {
	name: string;
	id: string;
	duration_ms: number;
	artists: SpotifyTrackArtist[];
	preview_url: string;
};

type SpotifyStandardizedTracks = {
	href: string;
	limit: number;
	items: SpotifyStandardizedTrack[];
	next: string;
	offset: number;
	previous: number | null;
	total: number;
};
