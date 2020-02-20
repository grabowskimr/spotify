import React from 'react';

type Props = {
	error: string;
};

const ErrorMessage = (props: Props): JSX.Element => (
	<div className="error-message">
		<span className="material-icons">sentiment_dissatisfied</span>
		<span className="empty-data-info-text">{props.error}</span>
	</div>
);

export default ErrorMessage;
