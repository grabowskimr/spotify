import React from 'react';

import PlaylistCover from './PlaylistCover';
import AlbumCover from './AlbumCover';
import CoverPlaceholder from './CoverPlaceholder';

type Props = {
	covers: [];
};

const CoverList: React.FC<Props> = (props): JSX.Element => (
	<ul className="covers-list">
		{props.covers.length ? (
			props.covers.map((record: any) => (
				<li key={record.id} className="cover-list-li">
					{record.type === 'album' ? <AlbumCover album={record} /> : <PlaylistCover playlist={record} />}
				</li>
			))
		) : (
			<>
				<li className="cover-list-li">
					<CoverPlaceholder type="playlist" />
				</li>
				<li className="cover-list-li">
					<CoverPlaceholder type="playlist" />
				</li>
				<li className="cover-list-li">
					<CoverPlaceholder type="playlist" />
				</li>
				<li className="cover-list-li">
					<CoverPlaceholder type="playlist" />
				</li>
				<li className="cover-list-li">
					<CoverPlaceholder type="playlist" />
				</li>
			</>
		)}
	</ul>
);

export default CoverList;
