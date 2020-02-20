import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getListOfCategories } from '../actions/apiCalls';
import ContentHeader from '../containers/ContentHeader';
import CategoryCover from '../containers/CategoryCover';
import CoverPlaceholder from '../containers/CoverPlaceholder';

const Categories: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const covers = useSelector((state: ReduxState) => state.categoryCovers);

	useEffect(() => {
		dispatch(getListOfCategories());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<ContentHeader title="Categories" />
			<ul className="covers-list">
				{covers.length ? (
					covers.map(record => (
						<li key={record.id} className="cover-list-li">
							<CategoryCover category={record} />
						</li>
					))
				) : (
					<>
						<li className="cover-list-li">
							<CoverPlaceholder type="category" />
						</li>
						<li className="cover-list-li">
							<CoverPlaceholder type="category" />
						</li>
						<li className="cover-list-li">
							<CoverPlaceholder type="category" />
						</li>
						<li className="cover-list-li">
							<CoverPlaceholder type="category" />
						</li>
						<li className="cover-list-li">
							<CoverPlaceholder type="category" />
						</li>
					</>
				)}
			</ul>
		</div>
	);
};

export default Categories;
