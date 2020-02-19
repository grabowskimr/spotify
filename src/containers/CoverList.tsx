import React from 'react';

import PlaylistCover from './PlaylistCover';
import AlbumCover from './AlbumCover';

type Props = {
	covers: [];
};

const CoverList: React.FC<Props> = (props): JSX.Element => (
	<ul className="covers-list">
		{props.covers.map((record: any) => (
			<li key={record.id} className="cover-list-li">
				{record.type === 'album' ? <AlbumCover album={record} /> : <PlaylistCover playlist={record} />}
			</li>
		))}
	</ul>
);

export default CoverList;
