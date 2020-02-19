/// <reference types="react-scripts" />
interface SpotifyResponse<T> {
	data: T;
	status: number;
}

interface SporifyPlaylists {
	message: string;
	playlists: SpotifyPlaylist;
}

interface SporifyAlbumsList {
	albums: SporifyAlbums;
}
interface SporifyAlbums {
	href: string;
	limit: number;
	items: SpotifyAlbum[];
	next: string;
	offset: number;
	previous: null | number;
	total: number;
}

interface SpotifyAlbum {
	type: string;
	total_tracks: number;
	name: string;
	release_date: string;
	release_date_precision: string;
	images: [
		{
			height: null | number;
			url: string;
			width: null | number;
		}
	];
	id: string;
}

interface SpotifyPlaylist {
	href: string;
	items: SpotifyPlaylistItem[];
	limit: number;
	next: null | number;
	offset: number;
	previous: null | number;
	total: number;
}

interface SpotifyPlaylistItem {
	description: string;
	id: string;
	images: [
		{
			height: null | number;
			url: string;
			width: null | number;
		}
	];
	name: string;
	type: string;
	tracks: {
		href: string;
		total: number;
	};
}

interface SpotifyTracks {
	href: string;
	limit: number;
	items: SpotifyTrack[];
	next: string;
	offset: number;
	previous: number | null;
	total: number;
}

interface SpotifyTrack {
	added_at: string;
	track: {
		id: string;
		href: string;
		preview_url: string;
		name: string;
		artists: SpotifyTrackArtist[];
		duration_ms: number;
	};
	name: string;
	id: string;
	duration_ms: number;
	artists: SpotifyTrackArtist[];
}

interface SpotifyTrackArtist {
	name: string;
	type: string;
	id: string;
}

interface SpotifyCategories {
	categories: {
		items: SpotifyCategory[];
		limit: number;
		next: string;
		offset: number;
		previous: null | number;
		total: number;
	};
}

interface SpotifyCategory {
	href: string;
	icons: [
		{
			height: null | number;
			url: string;
			width: null | number;
		}
	];
	id: string;
	name: string;
}
