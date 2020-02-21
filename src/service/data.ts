export const album: SpotifyAlbum = {
	type: 'album',
	total_tracks: 12,
	name: 'test',
	release_date: '2020-01-01',
	release_date_precision: '2020-01-01 00:00:00',
	images: [
		{
			url: 'url',
			height: 300,
			width: 200
		}
	],
	id: '1234id'
};

export const categories: SpotifyCategory[] = [
	{
		href: 'url',
		icons: [
			{
				height: 300,
				url: 'img url',
				width: 300
			}
		],
		id: 'id',
		name: 'category test'
	}
];

export const playlist: SpotifyPlaylist = {
	href: '#',
	items: [
		{
			description: 'desc',
			id: '1232',
			images: [
				{
					height: 300,
					url: 'url',
					width: 300
				}
			],
			name: 'name',
			type: 'playlist',
			tracks: {
				href: '#',
				total: 20
			}
		}
	],
	limit: 20,
	next: 21,
	offset: 0,
	previous: 0,
	total: 100
};

export const playlistsData: SporifyPlaylists = {
	playlists: playlist,
	message: ''
};

export const tracks: SpotifyTracks = {
	items: [
		{
			added_at: '2020-01-01',
			track: {
				artists: [],
				duration_ms: 12312,
				href: '#',
				id: '123',
				name: 'name',
				preview_url: 'url'
			},
			artists: [],
			duration_ms: 0,
			id: '123',
			name: '',
			preview_url: ''
		}
	],
	href: '',
	limit: 0,
	next: '123',
	offset: 0,
	previous: 0,
	total: 100
};

export const albums: SporifyAlbums = {
	href: '#',
	limit: 12,
	items: [],
	next: '123',
	offset: 0,
	previous: 0,
	total: 100
};
