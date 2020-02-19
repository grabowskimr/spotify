import React from 'react';

type Props = {
	title: string;
};

const ContentHeader = (props: Props): JSX.Element => (
	<div className="header">
		<h2 className="header-title">{props.title}</h2>
	</div>
);

export default ContentHeader;
