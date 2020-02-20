import React from 'react';

type Props = {
	type: 'playlist' | 'category';
};

const CoverPlaceholder = (props: Props): JSX.Element => (
	<>
		{props.type === 'playlist' ? (
			<div className="cover-placeholder">
				<div className="cover-placeholder-image"></div>
				<div className="cover-placeholder-description"></div>
				<div className="cover-placeholder-description small"></div>
			</div>
		) : (
			<div className="cover-placeholder">
				<div className="cover-placeholder-image"></div>
			</div>
		)}
	</>
);

export default CoverPlaceholder;
