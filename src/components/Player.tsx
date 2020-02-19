import React from 'react';

import PlayerControls from '../containers/PlayerControls';

type Props = {
	type: 'simple' | 'full' | 'play';
};

const Player: React.FC<Props> = (props): JSX.Element => {
	return <PlayerControls type={props.type} />;
};

export default Player;
