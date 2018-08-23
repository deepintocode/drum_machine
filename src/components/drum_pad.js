import React from 'react';

const DrumPad = (props) => (
	<div className="drum-pad" id={props.sound}>
        <p>{props.keyboard}</p>
        <audio src={props.audio} className="clip" id={props.keyboard}></audio>
	</div>
);

export default DrumPad;