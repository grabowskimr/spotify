import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getListOfCategories } from '../actions/apiCalls';
import ContentHeader from '../containers/ContentHeader';
import CategoryCover from '../containers/CategoryCover';

const Categories: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const covers = useSelector((state: ReduxState) => state.categoryCovers);

	useEffect(() => {
		dispatch(getListOfCategories());
	}, []);

	return (
		<div>
			<ContentHeader title="Categories" />
			<ul className="covers-list">
				{covers.map(record => (
					<li key={record.id} className="cover-list-li">
						<CategoryCover category={record} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
