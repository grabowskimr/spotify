import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
	category: SpotifyCategory;
};

const CategoryCover = (props: Props): JSX.Element => (
	<div className="record-cover">
		<img className="record-cover-image" src={props.category.icons[0].url} alt="cover" />
		<Link to={`/category/${props.category.id}`} className="category-link">
			{props.category.name}
		</Link>
	</div>
);

export default CategoryCover;
